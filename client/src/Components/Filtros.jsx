import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByTemper, filterCreated, getAllDogs, orderByAbc, orderByWeight } from "../redux/actions";
import '../Style/CSS/Filtro.css'
export default function Filtros({ setCurrentPage, currentDogs }) {
    const dispatch = useDispatch()
    const [orden, setOrden] = useState('')
    const tempers = useSelector((state) => state.tempers)



    function handleFilterCreate(e) {
        dispatch(filterCreated(e.target.value))
        setCurrentPage(1)
    }
    function handleClick(e) {
        e.preventDefault();
        dispatch(getAllDogs());
    }
    function handleOrderAbc(e) {
        e.preventDefault()
        dispatch(orderByAbc(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
        console.log(orden)
    }
    function handleOrderWeight(e){
        e.preventDefault()
        if(e.target.value === 'all'){
            dispatch(getAllDogs())
        }
        dispatch(orderByWeight(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
        console.log(orden)
    }

    function handleFilterTemper(e){
        e.preventDefault()
        dispatch(filterByTemper(e.target.value))
        setCurrentPage(1)
        
    }

    return (
        <div className="conteinerFiltros">
            <div className="filterByTemper">
                <label htmlFor="tempers">Temperamento: <select id='tempers' onChange={e=>handleFilterTemper(e)} >
                 <option value='all'>Todos</option>
                 {
                    tempers.map(temp =>{
                        return (
                            <option key={temp.id}>{temp.name}</option>
                        )
                    })
                 }
                </select></label>
            </div>

            <div className="filterByCreate">
                <label htmlFor="filterCreated">Creación: <select id='filterCreated' onChange={e => handleFilterCreate(e)}>
                    <option value='all'>Todos</option>
                    <option value='createDb'>Creados</option>
                    <option value='api'>Existente</option>
                </select></label>
            </div>

            <div className="orderByAbc">
                <label htmlFor="ordenAlf">Orden alfabetico: <select id="ordenAlf" onChange={e => handleOrderAbc(e)}>
                    <option>----</option>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select></label>
            </div>

            <div className="orderByWeight">
                <label htmlFor="orderWeight">Orden por peso: <select id="orderWeight" onChange={e=>handleOrderWeight(e)}>
                    <option value='all'>----</option>
                    <option value='max'>Mayor peso</option>
                    <option value='min'>Menor peso</option>
                </select></label>
            </div>

            <button onClick={e => handleClick(e)}>Recargar</button>
        </div>
    )
}