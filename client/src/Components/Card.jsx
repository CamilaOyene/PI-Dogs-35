import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, name, image, tempers, weightMin, weightMax }) {
    return (
        <div className="Card">
            <Link to={`/home/${id}`}>
                <h2>{name}</h2>
                <img src={image} alt={name} width='200' height='150' />
                <h3>Temperamentos: </h3>
                {Array.isArray(tempers) ?
                    tempers.map(t => {
                        return (
                            <p key={t.name}>{t.name}</p>
                        )
                    })
                    :
                    <p key={tempers}>{tempers}</p>}
                <h3>Peso: {weightMin}-{weightMax}</h3>
            </Link>
        </div>
    )
}