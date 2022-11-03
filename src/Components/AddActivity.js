import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./addactivity.css";
import { addActivity } from '../api';
import swal from 'sweetalert';

const AddActivity = ({navigate, activities, user, fetchRoutines}) => {

    // /users/${username}/routines

    const { username } = user;

    const { routineId } = useParams();

    const [count, setCount] = useState('');
    const [duration, setDuration] = useState('');
    const [activityId, setActivityId] = useState('');

    const storedToken = window.localStorage.getItem('token')

    const handleAddActivity = async () => {
      const results = await addActivity(storedToken, activityId, count, duration, routineId);
      console.log(results)

      if(results.name == 'error'){
        swal("Error adding activity!" , "Please make sure to fill out all fields!")

      } else {
        fetchRoutines();
        navigate(`/users/${username}/routines`)
      }

      return results
    }

    return (
      <div>
        <button type="button" class="btn btn-primary" id="single-routine-button" onClick={() => navigate(`/activities`)}>Go back</button>
        <h1 className='login-h1'>Add an activity</h1>
        <form className="card" id="create-routine-form">
            <div class="form-group">
            <label for="exampleFormControlSelect1">Select an activity:</label>
                <select 
                class="form-control" 
                id="exampleFormControlSelect1"
                onChange={(ev) => {
                    setActivityId(ev.target.value)
                }}
                >
                    {activities.map((currentItem, index) => {
                        return <option key={currentItem.id} value={currentItem.id}>{currentItem.name} </option>
                    })}
                </select>
                <label id="input-count-label" for="exampleInputEmail1">Number of sets:</label>
                <input
                class="form-control"
                id="input-count"  
                aria-describedby="emailHelp" 
                placeholder="Enter count"
                type="number"
                onChange={(ev) => {
                    ev.preventDefault();
                    setCount(ev.target.value)
                }}
                />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Duration:</label>
                  <input 
                  class="form-control" 
                  id="input-duration" 
                  placeholder="Enter duration"
                  type="number"
                  onChange={(ev) => {
                      ev.preventDefault();
                      setDuration(ev.target.value)
                  }}
                  />
                </div>
                <button 
                type="submit" 
                class="btn btn-primary"
                onClick={(ev) => {
                    ev.preventDefault();
                    handleAddActivity()
                }}
                >Submit</button>
        </form>
      </div>
    );
  }

export default AddActivity