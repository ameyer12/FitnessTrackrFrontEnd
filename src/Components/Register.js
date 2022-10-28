import React from 'react'
import { useState, useEffect } from 'react'
import { registerUser } from '../api';
import swal from 'sweetalert';

const Register = ({setToken, navigate}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        const results = await registerUser(username, password);

        // console.log(results)
        
        if(results.message === "you're signed up!") {
            setToken(results.token)
            window.localStorage.setItem('token', results.token)
            navigate('/profile')   

        } else if(results.error == 'A user by that username already exists' && username.length != 0 || password.length != 0){
            console.log(results.error)
            swal("User already exists!", "Please login instead.")

        } else if(results.error == 'Password Too Short!'&& username.length != 0 || password.length != 0){
            console.log(results.error)
            swal("Password too short!", "Password must be at least 8 characters.")
        }
    }


    return (
        <div>
            <h1>Register</h1>
            <form>
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
                    console.log(username)
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
                    console.log(password)
                }}
                />
                </div>
                <button 
                type="submit" 
                class="btn btn-primary"
                onClick={(ev) => {
                    ev.preventDefault();
                    handleSubmit()
                }}
            
                >Submit</button>
        </form>
        </div>
    );
  }

export default Register