import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { localStorageWrapper } from '../localStorage';
import {get_lobby_list} from '../API';

//              Client.
//emit - send a message to the server.
//on - receive a message from the server.
//              Server.
//emit - send a message to the client.
//on - receive a message from the client.

const RoomsList = () => {
    const [lobbies, setLobbies] = useState([] as {
        id: string;
        name: string;
        players: number;
        isPassword: boolean;
    }[]);
    const name = localStorageWrapper.get('name');
    
    useEffect(() => {
        get_lobby_list().then((data) => {
            setLobbies(data);
        });
    }, []);

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
                        lobbies.map((lobby) => {
                            return (
                                <div className='Room' key={lobby.id}>
                                    <div className='RoomName'>{lobby.name}</div>
                                    <div className='RoomPlayers'>{lobby.players}/14</div>
                                    <div className='RoomPassword'>{lobby.isPassword ? 'Пароль' : ''}</div>
                                    <button className='RoomButton'>Войти</button>
                                </div>
                            )
                        }, [])
                    }
                </div>
            </div>
        </div>
    );
}

export default RoomsList;