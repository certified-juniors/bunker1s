import cors from "cors";
import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { io as ioclient } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "../client/shared/events.model";
import Player from "../client/shared/player.model";
import { developmentConfig } from "../config";
import onConnection from "../src/handlers/onConnection";

describe("my awesome project", () => {
  let io: Server<ClientToServerEvents, ServerToClientEvents, Player>,
   serverSocket: Socket, clientSocket: any;

  beforeAll((done) => {
    const app = express()
    app.use(cors({
      origin: developmentConfig.allowedOrigin,
    }))
    app.use(express.json())
    const server = createServer(app)
    io = new Server<ClientToServerEvents, ServerToClientEvents, Player>(server, {
      cors: { origin: developmentConfig.allowedOrigin },
      serveClient: false,
    })
    server.listen(3000, () => {
      clientSocket = ioclient("http://localhost:3000");
      io.on('connection', (socket) => {
        onConnection(io, socket);
        serverSocket = socket;
      })
      clientSocket.on('connect', () => {
        console.log('client connected');
        done()
      });
    });
  });
  afterAll(() => {
    io.close();
    clientSocket.close();
  });

  test("join lobby", (done) => {
    clientSocket.emit("joinLobby", { name: "test" }, (response: any) => {
      expect(response).toEqual({ success: true });
      done();
    });
  });
});