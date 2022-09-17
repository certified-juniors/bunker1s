import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rules from './Rules';
import '../App.css'
import { io } from "socket.io-client";
import e from 'express';

//помещаем name в localStorage

const Login = () => {
    const [name, setName] = useState('');
    const [flag, setFlag] = useState(false);

    const handleSubmit = (event: any) => {
        if (!name) {
            event.preventDefault();
            return;
        }
        localStorage.setItem('name', name);
    };

    return (
        <div className='intro'>
            <div className='intro__media'>
                <video className='bunkerBackground' autoPlay muted loop src='../bunkerBackground.mp4'></video>
            </div>
            <div className='introContent'>
                <div className='introContentInner'>
                    <h1 className='loginHeading'>Вход</h1>
                    <div className='userNameInputForm'>
                        <input placeholder='Username' className='loginInput' type='text' onChange = {(event) => setName(event.target.value)}/>
                    </div>
                    <div className='joinCreateLobby'>
                        <Link to='/RoomsList'>
                            <button className='joinLobbyButton' type='submit' onClick={handleSubmit}>Войти</button>
                        </Link>
                    </div>
                    <div className='rulesBtn'>
                        <button className='rulesButton' onClick={() => setFlag(!flag)}>Правила</button>
                    </div>
                </div>
            </div>
            {flag ? 
                <div className='rules'>
                    <Rules setFlag={setFlag}/>
                </div> : null}
        </div>
    );
}

export default Login;