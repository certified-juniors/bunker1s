import { Server, Socket } from "socket.io";
import Player from "../../client/shared/player.model";

export default function lobbyHandlers(io: Server, socket: Socket & Player) {
    // извлекаем идентификатор комнаты и имя пользователя из объекта сокета
    const { roomId, userName } = socket
  
    // инициализируем хранилище пользователей
    if (!users[roomId]) {
      users[roomId] = []
    }
  
    // утилита для обновления списка пользователей
    const updateUserList = () => {
      // сообщение получают только пользователи, находящиеся в комнате
      io.to(roomId).emit('user_list:update', users[roomId])
    }
  
    // обрабатываем подключение нового пользователя
    socket.on('user:add', async (user) => {
      // сообщаем другим пользователям об этом
      socket.to(roomId).emit('log', `User ${userName} connected`)
  
      // записываем идентификатор сокета пользователя
      user.socketId = socket.id
  
      // записываем пользователя в хранилище
      users[roomId].push(user)
  
      // обновляем список пользователей
      updateUserList()
    })
  
    // обрабатываем отключения пользователя
    socket.on('disconnect', () => {
      if (!users[roomId]) return
  
      // сообщаем об этом другим пользователям
      socket.to(roomId).emit('log', `User ${userName} disconnected`)
  
      // удаляем пользователя из хранилища
      users[roomId] = users[roomId].filter((u) => u.socketId !== socket.id)
  
      // обновляем список пользователей
      updateUserList()
    })
  }