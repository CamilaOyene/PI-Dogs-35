import React from "react";
import Card from './Card';
import Error from './Error';
import NoMatches from "./NoMatches";
import '../Style/CSS/Cards.css'

export default function Cards({ currentDogs, error, setCurrentPage }) {

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
                                        createDb={dog.createDb ? dog.createDb : false}
                                        life_span={dog.life_span}
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