import React from 'react'
import { useState, useEffect } from 'react'
import { loginUser } from '../api';
import './login.css'
import swal from 'sweetalert';

const Login = ({setToken, navigate, logout}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const results = await loginUser(username, password);
        
        if(results.message === "you're logged in!") {
            setToken(results.token)
            window.localStorage.setItem('token', results.token)
            navigate('/profile')

        } else if(results.error == 'Username or password is incorrect') {
            swal("Username or password is incorrect!", "Please try again.")
            
        } else if(results.error == 'Please supply both a username and password') {
            swal("Please enter both a username and a password.")
        }
    }


    return (
        <div>
            <h1 className='login-h1'>Login</h1>
            <form className="card" id="login-form">
                <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input 
                type="username" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter username"
                onChange={(ev) => {
                    ev.preventDefault();
                    setUsername(ev.target.value)
                }}
                />
                </div>
                <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input 
                type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password"
                onChange={(ev) => {
                    ev.preventDefault();
                    setPassword(ev.target.value)
                }}
                />
                </div>
                <button 
                type="submit" 
                class="btn btn-primary"
                onClick={(ev) => {
                    ev.preventDefault();
                    handleLogin()
                }}
                >Submit</button>
        </form>
        </div>
    );
  }

export default Login