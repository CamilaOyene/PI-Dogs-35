import React from "react";
import '../Style/CSS/Paginado.css'

export default function Paginado({ dogsPerPage, allDogs, paginado }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="Paginado">
            <ul>
                {
                    pageNumbers && pageNumbers.map(number => {
                        return (
                            <button key={number} onClick={() => paginado(number)}>{number}</button>
                        )
                    })
                }
            </ul>
        </div>
    )
}