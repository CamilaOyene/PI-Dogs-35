import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByName } from "../redux/actions";

export default function SearchBar(){
    const dispatch= useDispatch()
    const [name, setName] = useState('')

    function handleInputChange(e){
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(!name){          //si busca sin escribir muestra un alert
            alert('Debe escribir un nombre')
        }
        dispatch(getDogsByName(name))
        setName('')
    }

    return(
        <div className="SearchBar">
            <input
                type='text'
                placeholder="Buscar raza..."
                value={name}
                onChange={e => handleInputChange(e)}/>
            <button type='submit' onClick={e=> handleSubmit(e)}>Buscar</button>

        </div>
    )
}