import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./editactivity.css";
import { updateActivity } from '../api';
import swal from 'sweetalert';

const EditActivity = ({navigate, fetchActivities}) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const { activityId } = useParams();

    const storedToken = window.localStorage.getItem('token')

    const handleUpdate = async () => {
      const results = await updateActivity(storedToken, name, description, activityId);

      if(results.name == 'error'){
        swal("Error editing activity!" , "Please fill out all fields and make sure activity name is unique!")

      } else {
        fetchActivities();
        navigate('/activities')
      }

      return results
    }

    return (
      <div>
        <button type="button" class="btn btn-primary" id="single-routine-button" onClick={() => navigate(`/activities`)}>Go back</button>
        <h1 className='login-h1'>Edit activity</h1>
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
                  <div class="form-check">
                  </div>
                </div>
                <button 
                type="submit" 
                class="btn btn-primary"
                onClick={(ev) => {
                    ev.preventDefault();
                    handleUpdate()
                }}
                >Submit</button>
        </form>
      </div>
    );
  }

export default EditActivity
