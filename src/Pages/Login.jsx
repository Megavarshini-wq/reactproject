import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Login.css';

const Login = () => {
    const handleLogin = (e) =>{
        e.preventDefault();
    };
    return (
        <div className='login'>
            <br/><br/><br/>
            <div className='login-container'>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                  <div className="login-fields">
                    <input type="email" placeholder='Email Address'/>
                    <input type="password" placeholder='Password'/>
                  </div>
                 <button type="submit" style={{marginLeft:'140px'}}>Log In</button>
                </form>
                <p className="login-login">Don't have an account? <Link to="/loginSign">Sign up here</Link></p>
            </div>
        </div>
    );
}

export default Login;