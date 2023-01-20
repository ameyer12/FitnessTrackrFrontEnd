import React, { useState } from 'react';
import "./createactivity.css";
import { createActivity } from '../api';
import swal from 'sweetalert';

const CreateActivity = ({navigate , fetchActivities}) => {


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const storedToken = window.localStorage.getItem('token')

    const handleCreate = async () => {
      const results = await createActivity(storedToken, name, description);

      if(results.name == 'error'){
        swal("Error creating activity!" , "Please fill out all fields and make sure the activity name is unique!")

      } else {
        fetchActivities();
        navigate('/activities')
      }

      return results
    }

    return (
      <div>
        <button type="button" class="btn btn-primary" id="single-routine-button" onClick={() => navigate(`/activities`)}>Go back</button>
        <h1 className='login-h1'>Create an activity</h1>
        <form className="card" id="create-routine-form">
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter activity name"
                onChange={(ev) => {
                    ev.preventDefault();
                    setName(ev.target.value)
                }}
                />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Description</label>
                  <input 
                  class="form-control" 
                  id="exampleInputPassword1" 
                  placeholder="Enter description"
                  onChange={(ev) => {
                      ev.preventDefault();
                      setDescription(ev.target.value)
                  }}
                  />
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

export default CreateActivity