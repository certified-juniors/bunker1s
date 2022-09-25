import cors from "cors";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { Socket as SocketClient, io as ioclient } from "socket.io-client";
import Context from "../client/shared/context.model";
import { ClientToServerEvents, ServerToClientEvents } from "../client/shared/events.model";
import Chac from "../client/shared/general/chac.model";
import Player from "../client/shared/general/player.model";
import { GameState } from "../client/shared/lobby.model";
import { developmentConfig } from "../config";
import onConnection from "../src/handlers/onConnection";
import gameService from "../src/services/game.service";
import { MyServer, MySocket } from "../src/types";

describe("game tests", () => {
    let io: MyServer, serverSocket: MySocket,
        clientSockets: SocketClient<ServerToClientEvents, ClientToServerEvents>[] = [];
    let context: Context = {
        lobby: {
            name: "test",
            players: [],
        },
        player: {
            nickname: "tester0",
        },
        game_state: GameState.LOBBY,
    };

    beforeAll((done) => {
        const app = express()
        app.use(cors({
            origin: developmentConfig.allowedOrigin,
        }))
        app.use(express.json())
        const server = createServer(app)
        io = new Server<ClientToServerEvents, ServerToClientEvents, {}, Player>(server, {
            cors: { origin: developmentConfig.allowedOrigin },
            serveClient: false,
        })
        function servlist() {
            server.listen(3001, () => {
                for (let i = 0; i < 14; i++) clientSockets.push(ioclient("http://localhost:3001"));
                io.on('connection', (socket) => {
                    onConnection(io, socket);
                    serverSocket = socket;
                });
                clientSockets[0].on('new_game', (lobby) => {
                    context.lobby = lobby;
                    context.player = lobby.players!.find((p) => p.nickname === context.player.nickname)!;
                    context.game_state = GameState.GAME;
                    done();
                });
                clientSockets[0].on("connect", () => {
                    clientSockets[0].on('errormsg', (msg) => {
                        done.fail(msg);
                    });
                    clientSockets[0].on('new_lobby', (lobby) => {
                        clientSockets[0].on('update_lobby', (player) => {         
                            if (player.disconnected) {
                                context.lobby.players = context.lobby.players!.filter(p => p.nickname !== player.nickname);
                            } else if (player.nickname in context.lobby.players!.map(p => p.nickname)) {
                                const index = context.lobby.players!.findIndex(p => p.nickname === player.nickname);
                                context.lobby.players![index] = player;
                            } else {
                                context.lobby.players!.push(player);
                            }
                            if (context.lobby.players!.length === 14) {
                                clientSockets[0].emit('switch_ready');
                            }
                        });
                        context.lobby = lobby;
                        for (let i = 1; i < 14; i++) {
                            clientSockets[i].on("errormsg", (msg) => {
                                console.log(i, msg);
                            });
                            clientSockets[i].on('new_lobby', (lobby) => {
                                clientSockets[i].emit('switch_ready');
                            });
                            clientSockets[i].emit("join_lobby", `tester${i}`, lobby.id!, null);
                        }

                    });
                    clientSockets[0].emit("create_lobby", "tester0", { name: "test" });
                });
                
            });
        }
        if (gameService.conditions instanceof Promise) {
            gameService.conditions.then(() => servlist());
        } else {
            servlist();
        }
    });
    afterAll(() => {
        io.close();
        clientSockets.forEach((client) => client.close());
    });
    test('check context for open me and hidden others', () => {
        expect(context.player[Chac.HEALTH]?.name).not.toBe("*****");
        expect(context.lobby.players![0][Chac.HEALTH]?.name).toBe("*****");
    });
});
