import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './routines.css'

const Routines = ( {routines, navigate} ) => {

  const storedToken = window.localStorage.getItem('token')
  
      if(storedToken != null) {
        return (
          <div>
              <h1 id="routines-h1">Public Routines:</h1>
              <div className='create-routine-button-container'>
                <button type="button" class="btn btn-primary" id="create-routine-button" onClick={() => navigate(`/createroutine`)}>Create Routine</button>
              </div>
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
                                        id="view-routine-button"
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
      } else {
        return (
          <div>
              <h1 id="routines-h1">Public Routines:</h1>
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
  }

export default Routines