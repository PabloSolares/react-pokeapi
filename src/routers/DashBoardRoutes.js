import React from 'react'
import { Route, Routes } from 'react-router'
import { PokemonItem } from '../components/pokemons/PokemonItem'
import { ResultsScreen } from '../components/pokemons/ResultsScreen'

export const DashBoardRoutes = () => {
    return (
        <Routes>
            <Route path="pokemon/:name" element={<PokemonItem />} />
            <Route path="search" element={<ResultsScreen />}/>
        </Routes>
    )
}
