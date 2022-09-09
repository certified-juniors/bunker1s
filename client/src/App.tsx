import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Components/Login';
import RoomSettings from './Components/RoomSettings';
import RoomsList from './Components/RoomsList';
import Lobby from './Components/Lobby'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/RoomSettings' element={<RoomSettings />} />
          <Route path='/RoomsList' element={<RoomsList />} />
          <Route path='/Lobby' element={<Lobby />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;