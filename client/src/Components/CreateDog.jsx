import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTempers, postDog } from '../redux/actions';
import defaultImage from '../Style/Images/defaultImage/defaultImage.jpeg'
import '../Style/CSS/CreateDog.css'

export default function CreateDog() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const temper = useSelector(state => state.tempers)
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: '',
        image: defaultImage,
        tempers: [],
        weightMin: 0,
        weightMax: 0,
        heightMin: 0,
        heightMax: 0,
        life_span: "",
    })

    const validations = (input) => {
        let errors = {}
        let regexName = /[^a-zA-Z0-9 ]/
        let regexNumber = /[a-zA-Z\s]/

        if (!input.name) {
            errors.name = 'Se requiere un nombre'
        }
        else if (input.name?.trim().length < 3 || input.name?.trim().length > 25) {
            errors.name = 'El nombre debe tener entre 3 y 25 caracteres'
        }
        else if (regexName.test(input.name)) {
            errors.name = 'El nombre no debe contener caracteres especiales'
        }
        if (input.tempers.length === 0) {
            errors.tempers = 'Debe seleccionar al menos 1 temperamento'
        }
        if (!input.image) {
            errors.image = 'Se requiere una imagen'
        }
        if (regexNumber.test(input.heightMin)) {
            errors.heightMin = 'Solo números'
        }
        if (regexNumber.test(input.heightMax)) {
            errors.heightMax = 'Solo números'
        }
        if (regexNumber.test(input.weightMin)) {
            errors.weightMin = 'Solo números'
        }
        if (regexNumber.test(input.weightMax)) {
            errors.weightMax = 'Solo números'
        }
        if (input.heightMin > 50 || input.heightMin < 20) {
            errors.heightMin = "Altura Minima entre 20y 50 cm "
        }
        if (input.heightMax > 90 || input.heightMax < 21) {
            errors.heightMax = "Altura Maxima entre 21 y 90 cm "
        }
        if (input.weightMin > 40 || input.weightMin < 3) {
            errors.weightMin = "Peso Minimo entre 3 y 40 kg "
        }
        if (input.weightMax > 60 || input.weightMax < 4) {
            errors.weightMax = "Peso Maximo entre 4 y 60 kg "
        }
        if (!input.life_span) {
            errors.life_span = 'Especificar años de vida'
        }
        if (regexNumber.test(input.life_span)) {
            errors.life_span = 'Solo números'
        }
        return errors
    }

    useEffect(() => {
        dispatch(getTempers())
    }, [dispatch])


    function handleChange(e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validations({
            ...input,
            [e.target.name]: e.target.value
        }))
    }


    function handleSelectTemper(e) {
        if (e.target.value !== 'all') {
            let filteredValue = input.tempers.find(temper => temper === e.target.value)

            if (!filteredValue) {
                setInput({
                    ...input,
                    tempers: [...input.tempers, e.target.value
                    ]
                })
                setErrors(validations({
                    ...input,
                    tempers: [...input.tempers,
                    e.target.value]
                }))
            }
        }
    }
    function handleDeletTemper(e) {
        e.preventDefault()
        let filteredArray = input.tempers.filter(temper => temper !== e.target.value)
        setInput({
            ...input,
            tempers: filteredArray
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (input.name === "" || input.tempers.length === 0 || input.image === "" || input.heightMin === 0 || input.heightMax === 0 || input.weightMin === 0 || input.weightMax === 0 || input.life_span === "") {
            return alert("Debe completar todos los campos .")
        }
        if(errors.name || errors.tempers || errors.image || errors.heightMin || errors.heightMax || errors.weightMin || errors.weightMax || errors.life_span){
            return alert("Completar bien por favor :) .")
        }
        dispatch(postDog(input))
        alert("¡Creación exitosa!")
        setInput({
            name: "",
            tempers: [],
            image: defaultImage,
            heightMin: 0,
            heightMax: 0,
            weightMin: 0,
            weightMax: 0,
            life_span: "",

        })
        navigate("/home")
    }
    return (
        <div className="CreateDog">
            <Link to='/home'><button className='backToHome'>Volver</button></Link>
            <h1>FORMULARIO DE CREACION DE RAZA</h1>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="name">Nombre: <input
                        id='name'
                        type='text'
                        value={input.name}
                        name='name'
                        placeholder="Ejemplo: Firulais"
                        onChange={(e) => handleChange(e)}
                    /></label>
                    {
                        !errors.name ? null : <span>{errors.name}</span>
                    }

                </div>
                <div>
                    <label htmlFor="height">Altura: Min<input
                        id='height'
                        type='number'
                        value={input.heightMin}
                        name='heightMin'
                        onChange={(e) => handleChange(e)} /> - Max<input
                            id='height'
                            type='number'
                            value={input.heightMax}
                            name='heightMax'
                            onChange={(e) => handleChange(e)} /></label>
                    {
                        !errors.heightMin ? null : <span>{errors.heightMin}</span>
                    }
                    {
                        !errors.heightMax ? null : <span>{errors.heightMax}</span>
                    }

                </div>
                <div>
                    <label htmlFor="weight">Peso: Min<input
                        id='weight'
                        type='number'
                        value={input.weightMin}
                        name='weightMin'
                        onChange={(e) => handleChange(e)} /> - Max<input
                            id='weight'
                            type='number'
                            value={input.weightMax}
                            name='weightMax'
                            onChange={(e) => handleChange(e)} /></label>
                    {
                        !errors.weightMin ? null : <span>{errors.weightMin}</span>
                    }
                    {
                        !errors.weightMax ? null : <span>{errors.weightMax}</span>
                    }
                </div>
                <div>
                    <label htmlFor="life_span">Años de vida: <input
                        id='life_span'
                        type='text'
                        value={input.life_span}
                        name='life_span'
                        placeholder="Formato '10 - 20 '"
                        onChange={(e) => handleChange(e)} /></label>
                    {
                        !errors.life_span ? null : <span>{errors.life_span}</span>
                    }
                </div>
                <div>
                    <label htmlFor="tempers">Temperamentos: <select id='tempers' onChange={e => handleSelectTemper(e)}>
                        <option value='all'>Seleccionar</option>
                        {
                            temper && temper.map(temper => {
                                return (
                                    <option key={temper.id} value={temper.name}>{temper.name}</option>
                                )
                            })
                        }
                    </select></label>
                    {
                        !errors.tempers ? null : <span>{errors.tempers}</span>
                    }

                    <ul>{
                        input.tempers.map(temp => {
                            return (
                                <li key={temp}>
                                    {temp} <button key={temp} className="buttonTemper" value={temp} onClick={e => handleDeletTemper(e)}>X</button>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
                <div>
                    <label htmlFor="image">Imagen: <input
                        id='image'
                        size='60'
                        type='text'
                        value={input.image}
                        name='image'
                        placeholder="Inserte URL de imagen"
                        onChange={(e) => handleChange(e)} /></label>
                    {
                        !errors.image ? null : <span>{errors.image}</span>
                    }

                </div>

                <button id='submit'
                    type="submit">Crear Raza</button>

            </form>
        </div>
    )
}