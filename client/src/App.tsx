import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Components/Login';
import RoomSettings from './Components/RoomSettings';
import RoomsList from './Components/RoomsList';

const App = () => {
  return (
    <div className='appWrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/RoomSettings' element={<RoomSettings />} />
          <Route path='/RoomsList' element={<RoomsList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;