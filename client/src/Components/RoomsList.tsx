import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { io } from "socket.io-client";

//              Client.
//emit - send a message to the server.
//on - receive a message from the server.
//              Server.
//emit - send a message to the client.
//on - receive a message from the client.

const RoomsList = () => {
    const SOCKETURL = 'localhost:3000';
    const [lobby, setLobby] = useState([]);
    const name = localStorage.getItem('name');

    const socket = io(SOCKETURL, { transports: ['websocket'] });

    useEffect(() => {
        socket.emit('join', { name }, (error: unknown) => {
            if (error) {
                console.log(error);
            }
        });

        socket.emit('get_lobby_list', (rooms: any) => {     //отправляем запрос на сервер для получения списка комнат
            socket.on('lobby_list', (rooms: any) => {       //получаем список комнат с сервера
                setLobby(rooms);
            });
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [SOCKETURL, name]);

    return (
        <div className='RoomsListWrapper'>
            <div className='RoomsListHeader'>
                <button className='ExitButton'><a href='/'>Выход</a></button>
                <div className='SearchBar'>
                    <input placeholder='Поиск' className='SearchInput' type='text' />
                    <button className='SearchButton' type='submit'>Поиск</button>
                </div>
                <Link to='/RoomSettings'>
                    <button className='CreateLobbyButton'>Создать лобби</button>
                </Link>
            </div>
            <div className='RoomsListBody'>
                <div className='RoomsListBodyInner'>
                    {
                        lobby.map((room: any) => (
                            <div className='Room'>
                                <div className='RoomName'>
                                    <p>{room.name}</p>
                                </div>
                                <div className='RoomPlayers'>
                                    <p>{room.players}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default RoomsList;