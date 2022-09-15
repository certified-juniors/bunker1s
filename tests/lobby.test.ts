import cors from "cors";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { io as ioclient, Socket as SocketClient } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "../client/shared/events.model";
import Player from "../client/shared/general/player.model";
import Lobby from "../client/shared/lobby.model";
import { developmentConfig } from "../config";
import onConnection from "../src/handlers/onConnection";
import lobbyService from "../src/services/lobby.service";
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
        client.onAny((event, ...args) => {
          console.log(`client ${index} event: ${event}, args: ${args}`);
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
      console.log('new_lobby', lobby);
      expect(lobby.id).toBeDefined();
      console.log('lobby created', lobby);
      done();
    });
    clientSocket.emit('create_lobby', "tester1", { name: 'test', password: '123' });

  }, 20000);

  test("join primitive lobby", (done) => {
    const clientSocket = clientSockets[1];
    clientSocket.on('lobby_list', (lobbies) => {
      const lobby = lobbies[0];
      clientSocket.on('new_lobby', (lobby) => {
        expect(lobby.players!.length).toBe(2);
        console.log('lobby joined', lobby);
        done();
      });
      clientSocket.emit('join_lobby', "tester2", lobby.id!, "123");
    });
    clientSocket.emit('get_lobby_list');
  });
});