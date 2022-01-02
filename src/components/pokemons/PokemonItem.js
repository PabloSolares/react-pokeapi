import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { getPokemonByName, padNumber, toUpper } from '../../helpers/getPokemons';
import { AbilitiesCard } from '../ui/AbilitiesCard';
import { LoadingScreen } from '../ui/LoadingScreen';
import { TypesCard } from '../ui/TypesCard';

export const PokemonItem = () => {

    const { name } = useParams();
    const [data, setData] = useState({
        poke: {},
        loading: true
    })

    const { poke, loading } = data;


    useEffect(() => {
        getPokemonByName(name)
        .then( poke => {
            setData({
                poke: poke,
                loading: false
            });
        })

        
    }, [])

 
    const { id, namePoke, img, types, weight, height, abilities } = poke;
    
    return (
        
        <div>
            { loading && <LoadingScreen /> }
            
            {
                !loading &&
                    <div>

                        <Link to="/"  >
                            <svg className="return-button" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                            </svg>
                        </Link>
                    <div className="card-container animate__animated animate__fadeIn">
                        
                        <div className="img-card">
                            <img src={img} alt={namePoke} />
                        </div>
                        <div className="name-card">
                            <h3>{ toUpper(namePoke) }</h3>
                            <div className="id-container">   
                                <span>#{padNumber(id)}</span>
                            </div>
                        </div>
                        <div className="physical-card">
                            <div className="weight-card">
                                Height
                                <div>
                                    <span>{ ( height * 10 ) }cm</span>
                                </div>
                            </div>
                            <div className="weight-card">
                                Weight
                                <div>
                                    <span>{ ( weight / 10 ) }kg</span>
                                </div>
                            </div>
                        </div>
                        <div className="abilities-container">
                        <div className="types-card">
                                Types
                                <div className="flex-type">

                                {
                                    types.map(t => {
                                        // console.log(typesColor(t.type.name))
                                        return <TypesCard 
                                        key={t.type.name}
                                        typeName={t.type.name}
                                        />
                                    })
                                }
                                </div>
                        </div>
                            <div className="abilities-card">
                                Abilities
                                <div className="flex-abilities">
                                    {
                                     abilities.map(a => {
                                         return <AbilitiesCard 
                                         key={a.ability.name}
                                         abilitie={a.ability.name}
                                         />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            }

        </div>
    )
}
