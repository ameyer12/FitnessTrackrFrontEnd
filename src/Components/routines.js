import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './routines.css'

const Routines = ( {routines} ) => {

    const navigate = useNavigate();

    return (
      <div>
          <h1>Welcome to the routines page!</h1>
          <div> {
                    routines.map((currentItem, index) => { 
                        return  <li className="card" key={index}>
                                    <div class="card-header">
                                        Name: {currentItem.name}
                                    </div>
                                    <div className='routine-card-p'>
                                        <p>Goal: {currentItem.goal}</p>
                                        <p>Creator ID: {currentItem.creatorName}</p>
                                    </div>
                                    <button 
                                    type="button" 
                                    class="btn btn-primary"
                                    onClick={() => {
                                        navigate(`/routines/${currentItem.id}`, { replace: true })
                                    }}
                                    >
                                    View Routine
                                    </button>
                                </li>
                    })}
        </div>
        <div className='spacing-div'></div>
      </div>
    );
  }

export default Routines