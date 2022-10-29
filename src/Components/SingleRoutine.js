import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './singleroutine.css'

const SingleRoutine = ({routines}) => {

    const { id } = useParams();

    const navigate = useNavigate();

    return <div>
           <button type="button" class="btn btn-primary" id="single-routine-button" onClick={() => navigate(`/routines`)}>Go back</button>
           <div className="activity-card"> {
              routines.map((currentItem, index) => { 
                  if(currentItem.id == id && currentItem.activities.length > 0){
                      return <div key={index}>
                                <h1 className='single-routine-h1'>{currentItem.name}</h1>
                                    { currentItem.activities.map ((currentItem, index) => {
                                            return  <li className="card" id='activity-card'>
                                                        <div className='single-routine-p'>
                                                            <p>Activity {index + 1}: {currentItem.name}</p>
                                                            <p>Description: {currentItem.description}</p>
                                                        </div>
                                                    </li>
                                        })
                                    }
                             </div>

                    } else if(currentItem.id == id && currentItem.activities.length == 0) {
                            return  <div key={index}>
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