import React from "react";
import imagError from '../Style/Images/Error/error.webp';
import '../Style/CSS/Error.css'
import { getAllDogs } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function Error({error}){

    const dispatch= useDispatch()
    function handleClick(e) {
        e.preventDefault();
        dispatch(getAllDogs());
    }

    return(
        <div className="Error">
            <img src={imagError} alt='errorImage' weight='200px'height='300'/>
            <h2>{error}</h2>
            <div className="buttonError">
              <button  onClick={e => handleClick(e)}>Volver</button>
            </div>

        </div>
    )
}