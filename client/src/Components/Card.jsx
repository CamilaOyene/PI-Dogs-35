import React from "react";
import { Link } from "react-router-dom";
import '../Style/CSS/Card.css'

export default function Card({ id, name, image, tempers, createDb, weightMin, weightMax }) {


    return (
        <div className="Card">

            <Link to={`/home/${id}`} >
                {createDb ? createDb : false}
                <h2>{name}</h2>
                <img src={image} alt={name} width='200' height='150' />
                <h3>Temperamentos: </h3>
                {Array.isArray(tempers) ?
                    <p>
                        {
                            tempers.map(t => t.name + ' ')
                        }
                    </p>
                    // tempers.map(t => t.name ? t === <p key={t.id}>{t.name}</p> :t === <p key={t}>{t}</p>)      
                    :
                    <p key={tempers}>{tempers}</p>}
                <h3>Peso: {weightMin}-{weightMax}</h3>
            </Link>
        </div>
    )
}