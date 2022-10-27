import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const SingleRoutine = ({routines}) => {

    const { id } = useParams();

    const navigate = useNavigate();

    return <div>
           <button type="button" class="btn btn-primary"onClick={() => navigate(`/routines`)}>Go back</button>
           <div> {
              routines.map((currentItem, index) => { 
                  if(currentItem.id == id && currentItem.activities.length > 0){
                      return <div key={index}>
                                <h1>{currentItem.name}</h1>
                                    { currentItem.activities.map ((currentItem, index) => {
                                        return  <li className="card">
                                                    <p>Activity {index + 1}: {currentItem.name}</p>
                                                    <p>Description: {currentItem.description}</p>
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
       </div>
  }

export default SingleRoutine