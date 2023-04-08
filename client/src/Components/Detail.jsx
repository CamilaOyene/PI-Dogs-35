import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { getDogsById, cleanDog } from '../redux/actions'

export default function Detail() {
    const dispatch = useDispatch()
    const dog = useSelector(state => state.details)
    const { id } = useParams()

    useEffect(()=>{
        dispatch(getDogsById(id))
        return function clean(){
            dispatch(cleanDog())
        }
    }, [dispatch,id])

    return(
        <div className="detailBackground">
            <div className="buttonVolver">
                <Link to='/home'><button>Volver</button></Link>
            </div>
            {
                dog && dog.name ?
                <div className="Detail">
                    <h1>{dog.name}</h1>
                    <p>Id: {dog.id}</p>
                    <h2>Temperamentos: </h2>
                    {Array.isArray(dog.tempers) ?
                    dog.tempers.map(t => {
                        return (
                            <p key={t.name}>{t.name}</p>
                        )
                    })
                    :
                    <p key={dog.tempers}>{dog.tempers}</p>}
                    <h2>Altura: {dog.heightMin}-{dog.heightMax}</h2>
                    <h2>Peso: {dog.weightMin}-{dog.weightMax}</h2>
                    <h2>Años de vida: {dog.life_span}</h2>
                    <div className="imageCountry">
                    <img src={dog.image} alt={dog.name} width='300' height='250'/>
                    </div>
                </div> 

                :
                <div id='loadingDetail'>
                    <div className="loader"></div>
                    <p>Cargando...</p>
                </div>
            }
        </div>
    )
}