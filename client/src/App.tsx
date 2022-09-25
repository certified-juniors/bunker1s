import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { io, Socket } from "socket.io-client";
import Login from './Components/Login';
import RoomSettings from './Components/RoomSettings';
import RoomsList from './Components/RoomsList';
import Lobby from './Components/Lobby';
import { ClientToServerEvents, ServerToClientEvents } from '../shared/events.model';

const SOCKETURL = 'http://localhost:3000';
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(SOCKETURL);

const App = () => {
  return (
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/RoomSettings' element={<RoomSettings />} />
          <Route path='/RoomsList' element={<RoomsList />} />
          <Route path='/Lobby' element={<Lobby />} />
        </Routes>
      </MemoryRouter>
  );
}

export default App;