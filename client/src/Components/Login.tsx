import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Rules from './Rules';
import '../App.css'
import { io } from "socket.io-client";

//помещаем name в localStorage

const Login = () => {
    const [name, setName] = useState('');
    const [flag, setFlag] = useState(false);
    localStorage.setItem('name', name);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        localStorage.setItem('name', name);
    }

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
                        {/* <button className='joinLobbyButton' type='submit' onClick={handleSubmit}><a href='/RoomsList'>Войти</a></button> */}
                        <button className='joinLobbyButton' type='submit' onClick={handleSubmit}><Link to='/RoomsList'>Войти</Link></button>
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