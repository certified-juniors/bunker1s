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
                    <h1 className='loginHeading'>Вход</h1>
                    <div className='userNameInputForm'>
                        <input placeholder='Username' className='loginInput' type='text' onChange = {(event) => setName(event.target.value)}/>
                    </div>
                    <div className='joinCreateLobby'>
                        <Link className='linkWrapper' onClick={e => (!name) ? e.preventDefault() : null} to={`/RoomsList?name=${name}`}>
                            <button className='joinLobbyButton' type='submit'>Войти</button>
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