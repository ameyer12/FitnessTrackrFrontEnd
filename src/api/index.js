const baseURL = 'http://fitnesstrac-kr.herokuapp.com/api'

export const registerUser = async (username, password) => {
    try {
        const response = await fetch(`${baseURL}/users/registers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        })

        const result = await response.json();
        return result;
    } catch (err) {
        console.log('Error registering user')
    }
};

export const logInUser = async (username, password) => {
    try {
        const response = await fetch(`${baseURL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username,
                    password
                }
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
        const result = response.json;
        return result;
    } catch (error) {
        console.log("Couldn't get user details")
        throw error
    }
}

export const getRoutinesByUser = async (
    token,
    // {id,
    // creatorId,
    // creatorName,
    // isPublic,
    // name,
    // goal,
    // activity}
) => {
    try {
        const response = await fetch(`${baseURL}/users/routines`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            // body: JSON.stringify({
            //     routines: {
            //         id,
            //         creatorId,
            //         creatorName,
            //         isPublic,
            //         name,
            //         goal,
            //         activity
            //     }
            // })
        })
        const result = response.json();
        return result;
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

export const createActivity = async (token, { name, description }) => {
    try {
        const response = await fetch(`${baseURL}/activities`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                activity: {
                    id,
                    name,
                    description
                }
            })
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("couldn't create activity")
        throw error
    }
}

export const updateActivity = async (token, { name, description }) => {
    try {
        const response = await fetch(`${baseURL}/activities`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                activity: {
                    name,
                    description
                }
            })
        })
        const result = await response.json();
        return result;
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

        return results;
        
    } catch (error) {
        console.log("Couldn't get public routines")
        throw error
    }
}

export const createRoutine = async (token, { name, goal, isPublic }) => {
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
        const result = await response.json();
        return result;
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

export const deleteRoutine = async ({ token, routineId }) => {
    try {
        const response = await fetch(`${baseURL}/routines/${routineId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("couldn't delete routine")
        throw error
    }
}

export const addActivity = async (token, { activityId, count, duration }) => {
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
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("coulsn't add activity to routine")
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
