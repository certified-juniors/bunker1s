import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { io } from "socket.io-client";

const SOCKETURL = 'localhost:3001';
const socket = io(SOCKETURL);

const RoomsList = () => {
    const SOCKETURL = 'localhost:3001';
    const [lobby, setLobby] = useState('');

    

    return (
        <div className='RoomsListWrapper'>
            <div className='RoomsListHeader'>
                <button className='ExitButton'><a href='/'>Выход</a></button>
                <div className='SearchBar'>
                    <input placeholder='Поиск' className='SearchInput' type='text' onChange = {(event) => setLobby(event.target.value)}/>
                    <button className='SearchButton' type='submit'>Поиск</button>
                </div>
                <Link to='/RoomSettings'>
                    <button className='CreateLobbyButton'>Создать лобби</button>
                </Link>
            </div>
            <div className='RoomsListBody'>
                <div className='RoomsListBodyInner'>
                    <button className='JoinGameButton'>LOBBY 5/14</button>
                    <button className='JoinGameButton'>LOBBY 5/14</button>
                    <button className='JoinGameButton'>LOBBY 5/14</button>
                    <button className='JoinGameButton'>LOBBY 5/14</button>
                
                </div>
            </div>
        </div>
    );
}

export default RoomsList;