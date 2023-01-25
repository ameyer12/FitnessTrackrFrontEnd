import React from 'react';
import './Navbar.css';
import logoImage from './Fitness.png';

const Navbar = ({logout, user}) => {

    const { username } = user;

    const storedToken = window.localStorage.getItem('token')

    if(storedToken !== null) {
        return <nav class="navbar navbar-expand-md  navbar-light bg-light">
                    <a id="navbar-brand-name" class="navbar-brand" href="/"><img className="logo-image" src={logoImage} alt="Austin Meyer Logo" width="80" height="65"/></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation-bar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navigation-bar">
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
            return <nav class="navbar navbar-expand-md navbar-light bg-light">
                        <a id="navbar-brand-name" class="navbar-brand" href="/"><img className="logo-image" src={logoImage} alt="Austin Meyer Logo" width="80" height="65"/></a>
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



