import { Server, Socket } from "socket.io";
import { ClientToServerEvents, ServerToClientEvents } from "../../client/shared/events.model";
import Player from "../../client/shared/general/player.model";
import { MyServer, MySocket } from "../types";
import lobbyHandlers from "./lobby.handler";

export default function onConnection(io: MyServer, socket: MySocket) {
    console.log('onConnection(), connected: ', socket.id);
    socket.on('disconnect', () => {
        if (socket.data.lobbyid) {
            io.to(socket.data.lobbyid).emit('player_disconnected', socket.id);
        }
        console.log('disconnected')
    });
    //   регистрируем обработчики для лобби
    lobbyHandlers(io, socket);
    
    //   регистрируем обработчики для сообщений
    //   messageHandlers(io, socket)
}