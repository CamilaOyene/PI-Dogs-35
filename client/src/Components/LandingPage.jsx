import React from "react";
import { Link } from 'react-router-dom';
import '../Style/CSS/LandingPage.css'

export default function LandingPage(){
    return (
        <div className="LandingPage">
            <Link to='/home' className="bienvenidos">
                <h1>Bienvenidos a la API de perros</h1>
            </Link>
            <p> En ese sitio puede encontrar informacion sobre mas de 250 razas utilizando la api externa THEDOGAPI .</p>
        </div>
    )
}