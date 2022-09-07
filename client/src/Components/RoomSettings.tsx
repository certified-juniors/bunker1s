import React, { useState } from 'react';

const RoomSettings = () => {
    const [roomSettingsFlag, setRoomSettingsFlag] = useState(false);

    return (
        <div>
            <div>
                <div>
                    <h1>Room Settings</h1>
                </div>
                <div>
                    <input placeholder='Room Name' type='text' />
                    <input placeholder='Room Password' type='text' />
                </div>
                <div>
                    <input type='checkbox' onChange={() => setRoomSettingsFlag(!roomSettingsFlag)}/><p>Room Settings</p>
                    {roomSettingsFlag ? <div>
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
            </div>
        </div>
    );
}

export default RoomSettings;