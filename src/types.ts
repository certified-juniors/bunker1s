import { Server, Socket } from "socket.io";
import { ClientToServerEvents, ServerToClientEvents } from "../client/shared/events.model";
import Player from "../client/shared/general/player.model";

type MyServer = Server<ClientToServerEvents, ServerToClientEvents, {}, Player>;
type MySocket = Socket<ClientToServerEvents, ServerToClientEvents, {}, Player>;

export { MyServer, MySocket };