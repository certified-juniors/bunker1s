import { Server, Socket } from "socket.io";

export default function onConnection(io: Server, socket: Socket) {
    console.log('connected', socket.id);
    socket.on('disconnect', () => {
        console.log('disconnected')
    })
    socket.on('message', (message: string) => {
        console.log('message', message)
        io.emit('message', message)
    })
    //   регистрируем обработчики для пользователей
    //   userHandlers(io, socket)
    
    //   регистрируем обработчики для сообщений
    //   messageHandlers(io, socket)
}