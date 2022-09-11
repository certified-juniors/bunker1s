import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

const RoomsList = () => {
    const SOCKETURL = 'localhost:3001';
    const [lobby, setLobby] = useState('');
    const { name } = queryString.parse(window.location.search)
    const number = "123";

    return (
        <div className='RoomsList'>
            <div className='RoomsListInnerContainer'>
                <h1 className='RoomsListHeading'>Rooms List</h1>
                <div className='RoomsListContainer'>
                    <div className='RoomsSearc'>
                        <input placeholder='Search Rooms' className='RoomsListInput' type='text' />
                        <button className='SearchButton'>Search</button>
                    </div>
                    <div className='RoomsListContainerInner'>
                        <Link to={`/Lobby?name=${name}&lobby=${lobby}`}>
                            <button onClick={()=> setLobby(number)}><h3>Room 1</h3><p>{number}</p></button>
                        </Link>
                        <button><h3>Room 3</h3><p>5/14</p></button>
                        <button><h3>Room 4</h3><p>5/14</p></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomsList;