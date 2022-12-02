import React, {useState} from 'react';
import './App.css';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Blogpost from './pages/Blogpost/Blogpost'
import Overview from './pages/Overview/Overview';

import {Routes, Route, Navigate} from 'react-router-dom'
import Navigation from "./components/Navigation";




function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [auth, toggleAuth ] = useState(false);

    return (
        <>
            <Navigation isAuth={auth} toggleAuth={toggleAuth}/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login toggleAuthenticated={toggleAuth}/>}/>
                <Route path="/overview" element=
                    {auth ? <Overview/> : <Navigate to="/login"/>}/>
                    {/* Uitgebreidere schrijfwijze {auth === true ? <Overview/> : <Navigate to="/login"/>}/>*/}


                <Route exact path="/overview/:id" element=
                    {auth ? <Blogpost/> : <Navigate to="/login"/>}/>
            </Routes>

        </>
    );
}

export default App;
