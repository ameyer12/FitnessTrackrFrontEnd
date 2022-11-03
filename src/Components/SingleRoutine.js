import React from 'react'
import { useParams, navigate } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
import './singleroutine.css'

const SingleRoutine = ({routines, navigate, user}) => {

    const { id } = useParams();

    const { username } = user

    return <div>
           <button 
           type="button" 
           class="btn btn-primary" 
           id="single-routine-button" 
           onClick={() => {
               navigate('/routines')
            }
           }
           >Go back</button>
           <div className="activity-card"> {
              routines.map((currentItem, index) => { 
                  if(currentItem.id == id && currentItem.activities.length > 0 && currentItem.creatorName !== username){
                      return <div key={index}>
                                <h1 className='single-routine-h1'>{currentItem.name}</h1>
                                    { currentItem.activities.map ((currentItem, index) => {
                                            return  <li className="card" id='activity-card'>
                                                        <div className='single-routine-p'>
                                                            <p>Activity {index + 1}: {currentItem.name}</p>
                                                            <p>Description: {currentItem.description}</p>
                                                            <p>Count: {currentItem.count} </p>
                                                            <p>Duration: {currentItem.duration} </p>
                                                        </div>
                                                    </li>
                                        })
                                    }
                             </div>
                  } else if(currentItem.id == id && currentItem.activities.length > 0 && currentItem.creatorName === username){
                        return <div key={index}>
                                    <div className='create-routine-button-container'>
                                        <button id="add-activity-button" type="button" class="btn btn-primary" onClick={() => navigate(`/routines/${id}/activities`)}>Add activity</button>
                                    </div>
                                    <h1 className='single-routine-h1'>{currentItem.name}</h1>
                                      { currentItem.activities.map ((currentItem, index) => {
                                              return  <li className="card" id='activity-card'>
                                                          <div className='single-routine-p'>
                                                              <p>Activity {index + 1}: {currentItem.name}</p>
                                                              <p>Description: {currentItem.description}</p>
                                                              <p>Count: {currentItem.count} </p>
                                                              <p>Duration: {currentItem.duration} </p>
                                                          </div>
                                                      </li>
                                          })
                                      }
                               </div>

                    } else if(currentItem.id == id && currentItem.activities.length == 0 && currentItem.creatorName !== username) {
                            return  <div key={index}>
                                        <h1>Oops! There are no activities for this routine yet.</h1>
                                    </div>

                    } else if(currentItem.id == id && currentItem.activities.length == 0 && currentItem.creatorName === username) {
                            return  <div key={index}>
                                        <div className='create-routine-button-container'>
                                            <button id="add-activity-button" type="button" class="btn btn-primary" onClick={() => navigate(`/routines/${id}/activities`)}>Add activity</button>
                                        </div>
                                        <h1>Oops! There are no activities for this routine yet.</h1>
                                    </div>
                        }                           
                    })             
            }
         </div>
        <div className='spacing-div'></div>
       </div>
  }

export default SingleRoutine