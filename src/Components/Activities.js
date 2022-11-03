import React from 'react'
import { useParams } from 'react-router-dom'
import './activities.css'

const Activities = ({activities, navigate}) => {

    const { activityId } = useParams()

    const storedToken = window.localStorage.getItem('token')
        return <div>
                    <h1 id="activities-h1">Public Activities:</h1>
                        <div className='create-activity-button-container'>
                            <button type="button" class="btn btn-primary" id="create-routine-button" onClick={() => navigate(`/createactivity`)}>Create Activity</button>
                        </div>
                        <div> {activities.map((currentItem, index) => { 
                            return  <li className="card" key={index}>
                                        <div class="card-header">
                                            Name: {currentItem.name}
                                        </div>
                                        <div className='activities-card-p'>
                                            <p>Description: {currentItem.description}</p>
                                            <p>ID: {currentItem.id}</p>
                                        </div>
                                        <button 
                                        type="button" 
                                        class="btn btn-primary" 
                                        onClick={() => 
                                        navigate(`/activities/${currentItem.id}`)
                                        }
                                        >Edit Activity</button>
                                    </li>
                            })}
                        </div>
                <div className='spacing-div'></div>
                </div>
  }

export default Activities