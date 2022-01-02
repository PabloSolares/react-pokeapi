import React, { useEffect, useState } from 'react'
import {  useLocation } from 'react-router-dom';
import  queryString  from 'query-string';
import { getPokemonByName } from '../../helpers/getPokemons';
import { LoadingScreen } from '../ui/LoadingScreen';
import { PokemonCard } from './PokemonCard';

export const ResultsScreen = () => {

    const [data, setData] = useState({
        poke: {},
        loading: true
    })

    const location = useLocation();
    
    const { q = '' } = queryString.parse(location.search);

    const { poke, loading } = data;


    useEffect( () => {
        getPokemonByName(q)
        .then( poke => {
            setData({
                poke: poke,
                loading: false
            });
        })


    }, [q])
    



    
        // // console.log(id)
    
    return (
        <div>
                { loading && <LoadingScreen /> }
                { !loading && <h3 className="result-title">Results</h3> }
                
                {
                    
                    ( !poke && !loading ) 
                        && <div className="alert alert-danger text-center">There aren't any result: { q }</div>
                }
                <div className="poke-container poke-search animate__animated animate__fadeIn">
                    {
                        (poke && poke.id )
                        &&  
                        <PokemonCard 
                            key={poke.id}
                            id={poke.id}
                            namePoke={poke.namePoke}
                            img={poke.img}
                            type={poke.types[0]}
                        />
                        
                    }

                    
                </div>
        </div>
    )
}
