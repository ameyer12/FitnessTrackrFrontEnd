import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { 
    Home, 
    Navbar, 
    Footer,
    Routines,
    CreateRoutine,
    SingleRoutine, 
    MyRoutines,
    Activities,
    AddActivity,
    EditActivity,
    Login,
    Register,
    Profile
 } from "./Components";
import { 
    getPublicRoutines,
    getUserDetails,
    getActivities,
    getRoutinesByUser,
 } from "./api";
import CreateActivity from "./Components/CreateActivity";


const App = () => {

    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);
    const [token, setToken] = useState("");
    const [user, setUser] = useState({});

    const navigate = useNavigate();

    function logout() {
        window.localStorage.removeItem('token'); 
        setToken('');
        navigate('/')
    }

    async function fetchRoutines() {
        const results = await getPublicRoutines()
        setRoutines(results)
    }

    async function fetchActivities() {
        const storedToken = window.localStorage.getItem('token')

        const results = await getActivities(storedToken)

        setActivities(results)
    }

   async function fetchUserDetails() {
        const storedToken = window.localStorage.getItem('token')

        const results = await getUserDetails(storedToken)

        setUser(results)
    }

    useEffect(() => {
        fetchRoutines()
    }, [])

    useEffect(() => {
        fetchActivities()
    }, [])

    useEffect(() => {
        fetchUserDetails()
    }, [token])

  return (
    <div>
        <Navbar logout={logout} navigate={navigate} user={user}/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/routines" element={<Routines fetchRoutines={fetchRoutines} routines={routines} navigate={navigate}/>}/>
                <Route path="/createroutine" element={<CreateRoutine fetchRoutines={fetchRoutines} routines={routines} navigate={navigate}/>}/>
                <Route path="/routines/:id" element={<SingleRoutine routines={routines} navigate={navigate} user={user}/>} />
                <Route path="/users/:username/routines" element={<MyRoutines navigate={navigate}/>}/>
                <Route path="/activities" element={<Activities fetchRoutines={fetchRoutines} activities={activities} navigate={navigate}/>}/>
                <Route path="/routines/:routineId/activities" element={<AddActivity fetchRoutines={fetchRoutines} fetchActivities={fetchActivities} activities={activities} navigate={navigate} user={user}/>}/>
                <Route path="/createactivity" element={<CreateActivity fetchActivities={fetchActivities} activities={activities} navigate={navigate}/>}/>
                <Route path="/activities/:activityId" element={<EditActivity fetchActivities={fetchActivities} activities={activities} navigate={navigate}/>}/>
                <Route path="/login" element={<Login setToken={setToken} navigate={navigate}/>}/>
                <Route path="/register" element={<Register setToken={setToken} navigate={navigate}/>}/>
                <Route path="/profile" element={<Profile fetchUserDetails={fetchUserDetails} user={user}/>}/>
            </Routes>
        <Footer />
    </div>
  );
}

export default App;
