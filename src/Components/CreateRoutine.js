import React, { useState } from 'react';
import "./createroutine.css";
import { createRoutine } from '../api';
import swal from 'sweetalert';

const CreateRoutine = ({navigate , fetchRoutines}) => {


    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(Boolean)

    const storedToken = window.localStorage.getItem('token')

    const handleCreate = async () => {
      const results = await createRoutine(storedToken, name, goal, isPublic);

      if(results.name == 'error'){
        swal("Error creating routine!" , "Please fill out all fields and make sure routine name is unique!")

      } else {
        fetchRoutines();
        navigate('/routines')
      }

      return results
    }

    return (
      <div>
        <button type="button" class="btn btn-primary" id="single-routine-button" onClick={() => navigate(`/routines`)}>Go back</button>
        <h1 className='login-h1'>Create a routine</h1>
        <form className="card" id="create-routine-form">
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter routine"
                onChange={(ev) => {
                    ev.preventDefault();
                    setName(ev.target.value)
                }}
                />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Goal</label>
                  <input 
                  class="form-control" 
                  id="exampleInputPassword1" 
                  placeholder="Enter name"
                  onChange={(ev) => {
                      ev.preventDefault();
                      setGoal(ev.target.value)
                  }}
                  />
                  <div class="form-check">
                    <input 
                      class="form-check-input" 
                      type="checkbox" value="" 
                      id="defaultCheck1"   
                      onClick={() => {
                        if(isPublic === false){
                          setIsPublic(true)
                        } else {
                          setIsPublic(false)
                        }
                      }}/>
                    <label class="form-check-label" for="defaultCheck1">
                    Public visibility?
                    </label>
                  </div>
                </div>
                <button 
                type="submit" 
                class="btn btn-primary"
                onClick={(ev) => {
                    ev.preventDefault();
                    handleCreate()
                }}
                >Submit</button>
        </form>
      </div>
    );
  }

export default CreateRoutine

 