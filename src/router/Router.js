import React from 'react';
import { Routes , Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import MainDashboard from '../pages/MainDashboard';
import CardComponent from '../components/CardComponent';



const Routing = () => {
    return (
        <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route path="/mainDashboard" element={<MainDashboard />}/>
            <Route path="/cardComponent" element={<CardComponent />}/>
        </Routes>
    )
}
export default Routing;