import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { 
    Home, 
    Navbar, 
    Routines,
    SingleRoutine, 
    MyRoutines,
    Activities,
    Login,
    Register
 } from "./Components";
import { 
    getPublicRoutines
 } from "./api";


const App = () => {

    const [routines, setRoutines] = useState([]);

    const navigate = useNavigate();

    async function fetchRoutines() {
        const results = await getPublicRoutines()
        setRoutines(results)
    }

    useEffect(() => {
        fetchRoutines()
    }, [])


  return (
    <div>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/routines" element={<Routines fetchRoutines={fetchRoutines} routines={routines} />}/>
                <Route path="/routines/:id" element={<SingleRoutine routines={routines} navigate={navigate} />} />
                <Route path="/myroutines" element={<MyRoutines/>}/>
                <Route path="/activities" element={<Activities />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
            </Routes>
    </div>
  );
}

export default App;
