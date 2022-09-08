import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rules from './Rules';
import '../App.css'
const Login = () => {
    const [name, setName] = useState('');
    const [flag, setFlag] = useState(false);

    return (
        <div className='intro'>
            <div className='intro__media'>
                <video className='bunkerBackground' autoPlay muted loop src='../bunkerBackground.mp4'></video>
            </div>
            <div className='introContent'>
                <div className='introContentInner'>
                    <h1 className='loginHeading'>Login</h1>
                    <div className='userNameInputForm'>
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
        </div>
    );
}

export default Login;