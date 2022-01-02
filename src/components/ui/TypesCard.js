import React from 'react'
import { toUpper, typesColor } from '../../helpers/getPokemons'

export const TypesCard = ({typeName}) => {
    
    return (
        <div className="type-button">
            <div 
                className={`${typesColor(typeName)} type-card`}
            >
                <p>
                    {toUpper(typeName)}
                </p>
            </div>        
        </div>
    )
}
