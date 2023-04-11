import React from "react";
import noMatches from '../Style/Images/NoMatches/nomatches.webp'
import '../Style/CSS/NoMatches.css'
import { getAllDogs } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function NoMatches(){
    
    const dispatch= useDispatch()
    function handleClick(e) {
        e.preventDefault();
        dispatch(getAllDogs());
    }

    return(
        <div className="NoMatches">
            <img src={noMatches} alt='noMatches' weight='200px'height='300'/>
            <h2>No se encuentran coincidencias.</h2>
            <div className="buttonNoMatches">
            <button  onClick={e => handleClick(e)}>Volver</button>
            </div>
        </div>
    )
}