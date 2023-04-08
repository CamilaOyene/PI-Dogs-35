import React from "react";
import Card from './Card';
import Error from './Error';
import NoMatches from "./NoMatches";

export default function Cards({ currentDogs, error }) {

    return (
        <div className="Cards">
            {error.length ? <Error error={error} />
                :
                typeof currentDogs === 'string' ?
                    <div>
                        <NoMatches />
                    </div>
                    :
                    currentDogs.length ?
                        currentDogs.map((dog) => {
                            return (
                                <div key={dog.id}>
                                    <Card key={dog.id}
                                        name={dog.name}
                                        image={dog.image}
                                        tempers={dog.tempers}
                                        weightMin={dog.weightMin}
                                        weightMax={dog.weightMax}
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