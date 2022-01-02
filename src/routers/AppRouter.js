import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PokemonScreen } from '../components/pokemons/PokemonScreen';
import { NavBar } from '../components/ui/NavBar';

import { DashBoardRoutes } from './DashBoardRoutes';

export const AppRouter = () => {
    return (
        <Router> 
            <NavBar />
            <Routes>
                <Route path="/" element={<PokemonScreen/>}/>
                <Route path="/*"  element={<DashBoardRoutes/>} />
            </Routes>
        </Router>
    )
}
