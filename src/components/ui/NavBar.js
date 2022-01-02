import React from 'react'
import { useForm } from '../../hooks/useForm'
import { useNavigate, useLocation, Link } from 'react-router-dom';
import  queryString  from 'query-string';


export const NavBar = () => {

    const nagivate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [ formValues, handleInputChange, reset ] = useForm({
        searchText: q
    })
    const { searchText } = formValues;

    // console.log(searchText)

    const handleSearch = (e) => {
        e.preventDefault();
        
        if( searchText === '' ){
            nagivate(`/`)
        reset()
        } else {
            nagivate(`search/?q=${ searchText }`)
            reset()
        }
        
    }
    


    return (
        <div className="navbar-container">

            <Link 
                to="/"
                className="container"
                >
                <img src="assets/Pokedex_icon-icons.com_67530.png" alt="PokeApi"/>

                <h3>Pokédex</h3>
                
            </Link>
            <div className="form-container">
                    <form className="form-search" onSubmit={handleSearch}>
                        <input type="search" autoComplete="off" placeholder="Search" aria-label="Search" name="searchText" value={searchText} onChange={handleInputChange}  />
                        <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            
        </div>
    )
}
