import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rules from './Rules';

const Login = () => {
    const [name, setName] = useState('');
    const [flag, setFlag] = useState(false);

    return (
        <div className='loginOutterContainer'>
            <div className='loginInnerContainer'>
                <h1 className='loginHeading'>Login</h1>
                <div className='userNameInputForm'>
                    <h3>Username</h3>
                    <input placeholder='Username' className='loginInput' type='text' onChange = {(event) => setName(event.target.value)}/>
                </div>
                <div className='joinCreateLobby'>
                    <Link onClick={e => (!name) ? e.preventDefault() : null} to={`/RoomsList?name=${name}`}>
                        <button className='joinLobbyButton' type='submit'>Join Lobby</button>
                    </Link>
                    <Link onClick={e => (!name) ? e.preventDefault() : null} to={`/RoomSettings?name=${name}`}>
                        <button className='createLobbyButton' type='submit'>Create Lobby</button>
                    </Link>
                </div>
                <div className='rulesBtn'>
                    <button className='rulesButton' onClick={() => setFlag(!flag)}>Rules</button>
                    {flag ? <div className='rules'>
                        <Rules />
                        </div> : null}
                </div>
            </div>
        </div>
    );
}

export default Login;