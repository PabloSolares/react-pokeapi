import  { useEffect, useState } from 'react'
import {   numberOfPokemons} from '../helpers/getPokemons';

export const useFetchPokemons = () => {
    
        const [state, setState] = useState({
            data: [],
            
            loading: true
        });
    
        useEffect( () => {
    
            numberOfPokemons()
                .then( data => {
                    setState({
                        data: data,
                        loading: false
                    });
                })
    
        }, [])

        
            
        

        return state;
   
}
