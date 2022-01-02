import React, { useEffect, useState } from 'react'
import { useFetchPokemons } from '../../hooks/useFetchPokemons';
import { PokemonCard } from './PokemonCard';

import ReactPaginate from 'react-paginate';
import { LoadingScreen } from '../ui/LoadingScreen';

export const PokemonScreen = () => {

    const {data, loading } = useFetchPokemons();
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState(null);
    
    useEffect(() => {      
     
        const total = data.length;
        const endOffset = itemOffset + 15;
        
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil( total / 15));

    }, [loading, itemOffset])

    
    
    const handlePageClick = (event) => {

        const newOffset = (event.selected * 15 ) % data.length;

        setItemOffset(newOffset)  
    }

    return (
        <>

        
            { loading && <LoadingScreen /> }
            <div className="poke-container animate__animated animate__fadeIn">
                {
                    currentItems &&
                    currentItems.map( poke => {
                        return <PokemonCard 
                            key={poke.id}
                            id={poke.id}
                            namePoke={poke.name}
                            img={poke.img}
                            type={poke.type}
                        />
                    })
                }
            </div>

            { 
                !loading 
                && 
                    <ReactPaginate 
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination justify-content-center'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'} 
                        breakClassName={'page-item'}   
                        breakLinkClassName={'page-link'}   
                        activeClassName={'active'}  
                    />
            }


        </>
    )
}
