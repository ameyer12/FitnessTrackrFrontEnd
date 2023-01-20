import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { getRoutinesByUser, deleteRoutine } from '../api';
import './myRoutine.css'

const MyRoutines = ({navigate}) => {

  const { username } = useParams()

  const [myRoutines, setMyRoutines] = useState([]);
  const [routineId, setRoutineId] = useState("");

  const fetchRoutinesByUser = async () => {
    const results = await getRoutinesByUser(username);

    setMyRoutines(results)
  }
  const storedToken = window.localStorage.getItem('token')

  const handleDelete = async () => {

    const results = await deleteRoutine(storedToken, routineId);
  }

  useEffect(() => {
    fetchRoutinesByUser()
  }, [myRoutines])

    return (
      <div>
          <h1 id="my-routines-h1">My Routines:</h1>
          <div> {
                    myRoutines.map((currentItem, index) => { 
                          return  <li className="card" key={index}>
                                      <div class="card-header">
                                          Name: {currentItem.name}
                                      </div>
                                      <div className='routine-card-p'>
                                          <p>Goal: {currentItem.goal}</p>
                                          <p>Creator ID: {currentItem.creatorName}</p>
                                      </div>
                                      <button 
                                      id="delete-myRoutine-button"
                                      type="button" 
                                      class="btn btn-primary"
                                      onClick={(event) => {
                                        if(routineId !== currentItem.id) {
                                          setRoutineId(currentItem.id)
                                          swal("Warning! Deleted routines cannot be retrieved later.", "Click the delete button again if you wish to proceed.",{
                                            button: "Okay"
                                          }) } else {
                                            handleDelete()
                                          }
                                      }}
                                      >
                                      Delete Routine
                                      </button>
                                      <button 
                                      id='view-myRoutine-button'
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

export default MyRoutines