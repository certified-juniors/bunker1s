import cors from "cors";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { io as ioclient, Socket as SocketClient } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "../client/shared/events.model";
import Chac from "../client/shared/general/chac.model";
import Player from "../client/shared/general/player.model";
import Lobby from "../client/shared/lobby.model";
import { developmentConfig } from "../config";
import onConnection from "../src/handlers/onConnection";
import { MyServer, MySocket } from "../src/types";

describe("lobby tests", () => {
  let io: MyServer, serverSocket: MySocket,
  clientSockets: SocketClient<ServerToClientEvents, ClientToServerEvents>[] = [];

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
    server.listen(3000, () => {
      for (let i = 0; i < 14; i++) clientSockets.push(ioclient("http://localhost:3000"));
      io.on('connection', (socket) => {
        onConnection(io, socket);
        serverSocket = socket;
      })
      clientSockets.forEach((client, index) => {
        client.on('connect', () => {
          if (index === 13) done();
        });
      });
    });
  });
  afterAll(() => {
    io.close();
    clientSockets.forEach((client) => client.close());
  });
  test("create primitive lobby", (done) => {
    const clientSocket = clientSockets[0];
    clientSocket.on('new_lobby', (lobby) => {
      expect(lobby.id).toBeDefined();
      done();
    });
    clientSocket.emit('create_lobby', "tester1", { name: 'test', password: '123' });

  }, 20000);

  test("join primitive lobby", (done) => {
    const clientSocket = clientSockets[1];
    clientSocket.on('lobby_list', (lobbies) => {
      clientSocket.on('new_lobby', (lobby) => {
        expect(lobby.players!.length).toBe(2);
        done();
      });
      if (lobbies.length === 0) {
        clientSocket.emit('create_lobby', "tester2", { name: 'test', password: '123' });
      }
      else {
        clientSocket.emit('join_lobby', "tester2", lobbies[0].id!, "123");
      }
    });
    clientSocket.emit('get_lobby_list');
  });

  test("leaving lobbies", (done) => {
    for (let i = 0; i < 14; i++) {
      const clientSocket = clientSockets[i];
      clientSocket.emit('leave_lobby')
    }
    setTimeout(() => {
      clientSockets[0].on('lobby_list', (lobbies) => {
        expect(lobbies.length).toBe(0);
        done();
      });
      clientSockets[0].emit('get_lobby_list');
    }, 1000);
  });
  test("create lobby with all options and start game with 14 players", (done) => {
    clientSockets[0].on('new_game', (game) => {
      done()
    });
    clientSockets[0].on('new_lobby', (lobby) => {
      clientSockets[0].emit('switch_ready');
      for (let i = 1; i < 14; i++) {
        clientSockets[i].on('new_lobby', (lobby) => {
          setTimeout(() => clientSockets[i].emit('switch_ready'), 100);
        });
        clientSockets[i].emit('join_lobby', `tester${i}`, lobby.id!, "123");
      }
    });
    setTimeout(() => clientSockets[0].emit('create_lobby', "tester0", {
      name: 'test',
      password: '123',
    } as Lobby), 100);
  }, 10000);
});