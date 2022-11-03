import React from 'react'
import './Navbar.css' 

const Navbar = ({logout, user}) => {

    const { username } = user;

    const storedToken = window.localStorage.getItem('token')

    if(storedToken !== null) {
        return <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">Fitness Tracker</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link" href="/">Home</a>
                            <a class="nav-item nav-link" href="/routines">Routines</a>
                            <a class="nav-item nav-link" href="/activities">Activities</a>
                            <a class="nav-item nav-link" href={`/users/${username}/routines`}>My Routines</a>
                            <a class="nav-item nav-link" href="/profile">Profile</a>
                            <a 
                            class="nav-item nav-link" 
                            href="/" 
                            onClick={(ev) => {
                                ev.preventDefault()
                                logout()}}
                            >Logout</a>
                        </div>
                    </div>
                </nav>
    } else {
            return <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="/">Fitness Tracker</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-item nav-link" href="/">Home</a>
                                <a class="nav-item nav-link" href="/routines">Routines</a>
                                <a class="nav-item nav-link" href="/login">Login</a>
                                <a class="nav-item nav-link" href="/register">Register</a>
                            </div>
                        </div>
                  </nav>
    }
}

export default Navbar



