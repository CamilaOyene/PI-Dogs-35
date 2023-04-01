import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Filtros({ setCurrentPage }) {
    const dispatch = useDispatch()
    const [orden, setOrden] = useState('')
    const tempers = useSelector((state) => state.tempers)


    // function handleTempers(e) {
    //     e.preventDefault(e)
    //     dispatch(getDogsByTemper(e.target.value))
    //     setCurrentPage(1)

    // }

    return (
        <div className="conteinerFiltros">
            <h2>Filtros</h2>
            <div className="filterByTemper">
                <label htmlFor="tempers">Temperamento: <select id='tempers' >
                    <option>----</option>
                    {/* <option value='all'>Todos</option>
                    {
                        tempers && tempers.map(temper => {
                            return (
                                <option key={temper.id} value={temper.id}>{temper.name}</option>
                            )
                        })
                    } */}
                </select></label>
            </div>

            <div className="filterByCreate">
                <label>Creación: <select>
                    <option>----</option>
                </select></label>
            </div>

            <div className="orderByAbc">
                <label>Orden alfabetico: <select>
                    <option>----</option>
                </select></label>
            </div>

            <div className="orderByWeight">
                <label>Orden por peso: <select>
                    <option>----</option>
                </select></label>
            </div>

            <button>Recargar</button>
        </div>
    )
}