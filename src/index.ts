import cors from "cors"
import express from "express"
import { createServer } from "http";
import { developmentConfig, productionConfig } from "../config"
import { Server } from "socket.io";
import onConnection from "./handlers/onConnection";
import { ClientToServerEvents, ServerToClientEvents } from "../client/shared/events.model";
import Player from "../client/shared/player.model";
const isProduction = process.env.NODE_ENV === 'production'

let config: typeof developmentConfig | typeof productionConfig;
if (isProduction) {
    console.log('production');
    config = productionConfig
} else {
    console.log('development');
    config = developmentConfig
}


const corsOptions = {
    origin: config.allowedOrigin,
} as cors.CorsOptions

const app = express()
app.use(
    cors(corsOptions)
)
app.use(express.json())


const server = createServer(app)

const io = new Server<ClientToServerEvents, ServerToClientEvents, Player>(server, {
    cors: corsOptions,
    serveClient: false,
})

io.on('connection', (socket) => {
    onConnection(io, socket)
})

io.engine.on("connection_error", (err: any) => {
    console.log(err.req);      // the request object
    console.log(err.code);     // the error code, for example 1
    console.log(err.message);  // the error message, for example "Session ID unknown"
    console.log(err.context);  // some additional error context
});

server.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`)
})
