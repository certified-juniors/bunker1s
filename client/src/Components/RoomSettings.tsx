import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import Conditions from '../../shared/general/conditions.model';
import { localStorageWrapper } from '../localStorage';

const Socket = localStorageWrapper.get('socket');

const RoomSettings = () => {
    const [roomSettingsFlag, setRoomSettingsFlag] = useState(false);
    const [roomName, setRoomName] = useState('');

    

    return (
        <div>
            <div>
                <div>
                    <h1>Room Settings</h1>
                </div>
                <div>
                    <input placeholder='Room Name' type='text' onChange = {(event) => setRoomName(event.target.value)}/>
                    <input placeholder='Room Password' type='text'/>
                </div>
                <div>
                    <input type='checkbox' onChange={() => setRoomSettingsFlag(!roomSettingsFlag)}/><p>Room Settings</p>
                    {roomSettingsFlag ?
                        <div>
                            <select>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                            </select>
                            <input placeholder='Выход на поверхность' type='number' />
                            <input placeholder='Вероятность найти выживших' type='number' />
                            <input placeholder='Разрушенность' type='number' />
                            <input placeholder='Размер бункера' type='number' />
                        </div> : null}
                </div>
                <div>
                    <button>Создать лобби</button>
                </div>
            </div>
        </div>
    );
}

export default RoomSettings;