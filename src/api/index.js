import { useState } from "react";
import { useParams } from "react-router-dom";

const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api'

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${baseURL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    username: username,
                    password: password
            })
        })

        const results = await response.json();

        console.log(results)
 
        return results;
    } catch (err) {
        console.log('Error registering user')
    }
};

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${baseURL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    username,
                    password
            })
        })
        const result = await response.json();
        return result;
    } catch (err) {
        console.log('Error logging in user')
    }
}

export const getUserDetails = async (token) => {
    try {
        const response = await fetch(`${baseURL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        const results = await response.json();

        return results;
    } catch (error) {
        console.log("Couldn't get user details")
        throw error
    }
}

export const getRoutinesByUser = async (username) => {
    try {
        const storedToken = window.localStorage.getItem('token')

        const response = await fetch(`${baseURL}/users/${username}/routines`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${storedToken}`
            },
        })

        const results = response.json();

        return results;
    } catch (error) {
        console.log("Couldn't get routines by user")
        throw error
    }
}

export const getActivities = async (token) => {
    try {
        const response = await fetch(`${baseURL}/activities`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const results = await response.json();
  
        return (results)
    } catch (error) {
        console.log("couldn't get activities")
        throw error
    }
}

export const createActivity = async (token, name, description) => {
    try {
        const response = await fetch(`${baseURL}/activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                description
            })
        })
        const results = await response.json();
        
        return results;
    } catch (error) {
        console.log("couldn't create activity")
        throw error
    }
}

export const updateActivity = async (token, name, description, activityId) => {
    try {

        const response = await fetch(`${baseURL}/activities/${activityId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                description
            })
        })

        const results = await response.json();

        return results;
    } catch (error) {
        console.log("couldn't update activity")
        throw error
    }
}

export const getPublicRoutinesByActivity = async (token, { activityId }) => {
    try {
        const response = await fetch(`${baseURL}/activities/${activityId}/routines`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const results = await response.json();
        return (results);
    } catch (error) {

    }
}

export const getPublicRoutines = async () => {
    try {
        const response = await fetch(`${baseURL}/routines`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const results = await response.json();

        console.log(results)

        return results;

    } catch (error) {
        console.log("Couldn't get public routines")
        throw error
    }
}

export const createRoutine = async (token, name, goal, isPublic) => {
    try {
        const response = await fetch(`${baseURL}/routines`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                goal,
                isPublic
            })
        })
        const results = await response.json();

        return results;
    } catch (error) {
        console.log("couldn't make routine")
        throw error
    }
}

export const updateRoutine = async (token, { name, goal, isPublic }) => {
    try {
        const response = await fetch(`${baseURL}/routines/${routineId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                goal,
                isPublic
            })
        })
        const result = await response.json();
        
        return result;
    } catch (error) {
        console.log("couldn't update routine")
        throw error
    }
}

export const deleteRoutine = async (token, routineId) => {
    try {
        const response = await fetch(`${baseURL}/routines/${routineId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

        })
        const results = await response.json();
        return results;
    } catch (error) {
        console.log("couldn't delete routine")
        throw error
    }
}

export const addActivity = async (token, activityId, count, duration, routineId) => {
    try {
        const response = await fetch(`${baseURL}/routines/${routineId}/activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                activityId,
                count,
                duration
            })
        })
        const results = await response.json();
        return results;
    } catch (error) {
        console.log("couldn't add activity to routine")
        throw error
    }
}

export const updateRoutineActivity = async (token, { count, duration }) => {
    try {
        const response = await fetch(`${baseURL}/routine_activities/${routineActivityId}`, {
            method: "PATCH",

            body: JSON.stringify({
                count, duration
            })
        })
        const result = response.json();
        return result;
    } catch (error) {
        console.log("couldn't update routine activity")
        throw error
    }
}

export const deleteRoutineActivity = async (token, routineActivityId) => {
    try {
        const response = await fetch(`${baseURL}/routine_activities`, {
            method: "DELETE",

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

        }
        )
        const result = await response.json();
        return result;
    } catch (error) {
    console.log("Failed to delete routine activity")
    throw error}}
