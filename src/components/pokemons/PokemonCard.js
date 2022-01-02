import React from 'react'
import { padNumber, typesColor, toUpper } from '../../helpers/getPokemons'
import { Link } from 'react-router-dom';

export const PokemonCard = ({ id, namePoke, img, type}) => {
    
    const { type:name } = type;

    const typeColor = typesColor(name.name)

    const UpperName = toUpper( namePoke )

    // console.log(typeColor)

    return (

        <Link to={`/pokemon/${namePoke}`} className="box-container" key={id}>
            <div className={`${typeColor} img-container`}>
                <img src={img} alt="img" />
            </div>
            <div className="name-container">
                { UpperName }
                <div className="id-container">
                    <span>#{padNumber(id)}</span>
                </div>
            </div>

        </Link>
  
    )
}
