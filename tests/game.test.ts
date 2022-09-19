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
import { MyServer, MySocket } from "../src/types";

describe("game tests", () => {
    let io: MyServer, serverSocket: MySocket,
        clientSockets: SocketClient<ServerToClientEvents, ClientToServerEvents>[] = [];
    let context: Context = {
        lobby: {
            name: "test",
        },
        player: {
            nickname: "tester13",
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
        server.listen(3001, () => {
            for (let i = 0; i < 14; i++) clientSockets.push(ioclient("http://localhost:3001"));
            io.on('connection', (socket) => {
                onConnection(io, socket);
                serverSocket = socket;
            })
            for (let index = 0; index < 14; index++) {
                const client = clientSockets[index];
                client.onAny((event, ...args) => {
                    if (index == 13 || index == 0) console.log(`client ${index} event: ${event}, args: ${args}`);
                });
                client.on('connect', () => {
                    if (index === 0) {
                        client.emit('create_lobby', "tester0", { name: 'test', password: '123' });
                    } else {
                        client.emit('join_lobby', "tester" + index, '0', '123')
                    }
                });
                client.on('new_game', (lobby) => {
                    if (index === 13) {
                        context = {
                            player: lobby.players!.filter(player => player.nickname === 'tester13')[0],
                            game_state: lobby.game_state!,
                            lobby: lobby,
                            before_game: true,
                        } as Context;
                        done();
                    }
                });
                client.on('new_lobby', (lobby) => {
                    if (index != 0) {
                        client.emit('switch_ready');
                    }
                });
                client.on('update_lobby', (player) => {
                    if (index === 0) {
                        if (!player.disconnected) {
                            context.lobby.players!.push(player);
                        }
                        console.log(context.lobby.players!.length);
                        if (context.lobby.players!.length === 14) {
                            client.emit('switch_ready');
                        }
                    }
                });
            }
        });
    }, 20000);
    afterAll(() => {
        io.close();
        clientSockets.forEach((client) => client.close());
    });
    test('check context for open me and hidden others', () => {
        console.log(context.lobby);
        expect(context.player[Chac.HEALTH]?.name).not.toBe("*****");
        expect(context.lobby.players![0][Chac.HEALTH]?.name).toBe("*****");
    });
});
