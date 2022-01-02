import React from 'react'
import { toUpper } from './../../helpers/getPokemons';

export const AbilitiesCard = ({abilitie}) => {
    
    return (
        <div className="abilitie-container">
            <span>{toUpper(abilitie)}</span>
        </div>
    )
}
