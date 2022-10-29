import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { 
    Home, 
    Navbar, 
    Footer,
    Routines,
    SingleRoutine, 
    MyRoutines,
    Activities,
    Login,
    Register,
    Profile
 } from "./Components";
import { 
    getPublicRoutines,
    getUserDetails,
    getActivities
 } from "./api";


const App = () => {

    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);
    const [token, setToken] = useState("");
    const [user, setUser] = useState({})

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

        console.log(results)
    }

    const fetchUserDetails = async () => {
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
        <Navbar logout={logout} navigate={navigate}/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/routines" element={<Routines fetchRoutines={fetchRoutines} routines={routines} />}/>
                <Route path="/routines/:id" element={<SingleRoutine routines={routines} navigate={navigate} />} />
                <Route path="/myroutines" element={<MyRoutines/>}/>
                <Route path="/activities" element={<Activities fetchRoutines={fetchRoutines} activities={activities}/>}/>
                <Route path="/login" element={<Login setToken={setToken} navigate={navigate} />}/>
                <Route path="/register" element={<Register setToken={setToken} navigate={navigate}/>}/>
                <Route path="/profile" element={<Profile fetchUserDetails={fetchUserDetails} user={user}/>}/>
            </Routes>
        <Footer />
    </div>
  );
}

export default App;
