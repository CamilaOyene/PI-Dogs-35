import React from "react";
import Card from './Card';
import Error from './Error';

export default function Cards({ currentDogs, error }) {
    return (
        <div className="Cards">
            {error.length ? <Error error={error} />
                :
                currentDogs.length ?
                    currentDogs.map((dog) => {
                        return (
                            <div key={dog.id}>
                                <Card key={dog.id}
                                    name={dog.name}
                                    image={dog.image}
                                    tempers={dog.tempers}
                                    weight={dog.weight}
                                    id={dog.id}
                                />
                            </div>
                        )
                    })
                    : <div>
                        <div className='loader'></div>
                        <p>Cargando...</p>
                    </div>
            }
        </div>
    )
}