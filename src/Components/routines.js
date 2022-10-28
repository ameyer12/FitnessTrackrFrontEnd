import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Routines = ( {routines} ) => {

    const navigate = useNavigate();

    return (
      <div>
          <h1>Welcome to the routines page!</h1>
          <div> {
                    routines.map((currentItem, index) => { 
                        return  <li className="card" key={index}>
                                    <p>Name: {currentItem.name}</p>
                                    <p>Goal: {currentItem.goal}</p>
                                    <p>Creator ID: {currentItem.creatorName}</p>
                                    <button 
                                    type="button" 
                                    class="btn btn-primary"
                                    onClick={() => {
                                        console.log(currentItem.id)
                                        navigate(`/routines/${currentItem.id}`, { replace: true })
                                    }}
                                    >
                                    View
                                    </button>
                                </li>
                    })}
        </div>
      </div>
    );
  }

export default Routines