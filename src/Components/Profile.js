import React, { useEffect, useState } from 'react'
import './profile.css'

const Profile = ({user}) => {

  const { username } = user

  const storedToken = window.localStorage.getItem('token')
  if(storedToken === null){
    return <div id='profile-page'>
              <h1 id='profile-page-h1'>Please log in or register to view your profile.</h1>
          </div>
  } else{
    return (
      <div id='profile-page'>
          <h1 id='profile-page-h1'>Welcome {username}!</h1>
      </div>
    );
  }
}

export default Profile