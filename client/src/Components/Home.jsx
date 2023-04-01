import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Paginado from './Paginado';
import Cards from './Cards';
import SearchBar from './SearchBar';
import{ getAllDogs, getTempers } from '../redux/actions'
import Filtros from './Filtros';


export default function Home() {
    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
    const error = useSelector((state) => state.errors)
    const [currentPage, setCurrentPage] = useState(1)
    const dogsPerPage = 8
    const indexOfLast = currentPage * dogsPerPage
    const indexOfFirst = indexOfLast - dogsPerPage
    const currentDogs = allDogs.slice(indexOfFirst, indexOfLast)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect(()=>{
        dispatch(getAllDogs())
        dispatch(getTempers())
    },[dispatch])
    
    return (
        <div className='Home'>
            <header className='headerDogs'>
                <h1>Perros</h1>
            </header>
            <nav>
                <Link to='/'><button>Atrás</button></Link>
                <Link to='/post'><button>Crea una raza</button></Link>
            </nav>

            <Filtros
            setCurrentPage={setCurrentPage}/>

            <SearchBar />
            <div className='pages'>
                <Paginado
                    dogsPerPage={dogsPerPage}
                    allDogs={allDogs.length}
                    paginado={paginado}
                />
                <Cards
                    currentDogs={currentDogs}
                    error={error}
                />
                <Paginado
                    dogsPerPage={dogsPerPage}
                    allDogs={allDogs.length}
                    paginado={paginado}
                />
            </div>

        </div>
    )


}