import React from "react";
import { Link } from "react-router-dom";

export default function Card({id,name, image, tempers, weight}){
    return(
        <div className="Card">
            <Link to={`/home/${id}`}>
                <h2>{name}</h2>
                <img src={image} alt={name} width='200' height='150'/>
                <h3>Temperamentos: {tempers}</h3>
                <h3>Peso: {weight}</h3>
            </Link>
        </div>
    )
}