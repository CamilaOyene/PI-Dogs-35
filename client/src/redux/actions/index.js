import axios from 'axios';

export function getAllDogs() {
    return async function (dispatch) {
        try {
            let json = await axios('http://localhost:3001/dogs')
            return dispatch({
                type: 'GET_DOGS',
                payload: json.data
            })
        } catch (error) {
            console.log('error getAllDogs', error)
            return dispatch({
                type: 'ERROR',
                payload: error.response
            })
        }
    }
}

export function getDogsByName(name) {
    return async function (dispatch) {
        try {
            let json = await axios(`http://localhost:3001/dogs?name=${name}`)
            return dispatch({
                type: 'GET_DOGS_BY_NAME',
                payload: json.data
            })
        } catch (error) {
            console.log("error getDogsByName", error)
            return dispatch({
                type: 'ERROR',
                payload: error.response.data
            })
        }
    }
}

export function getDogsById(id) {
    return async function (dispatch) {
        try {
            let json = await axios(`http://localhost:3001/dogs/${id}`)
            return dispatch({
                type: 'GET_DOG_BY_ID',
                payload: json.data
            })
        } catch (error) {
            console.log("error getDogsById", error)
            return dispatch({
                type: 'ERROR',
                payload: error.response.data
            })
        }
    }
}

export function cleanDog() {
    return {
        type: 'CLEAN_DOG'
    }
}


export function getTempers() {
    return async function (dispatch) {
        try {
            let json = await axios('http://localhost:3001/temperaments')

            return dispatch({
                type: 'GET_TEMPERS',
                payload: json.data
            })
        } catch (error) {
            console.log("error en get_tempers", error.response)
            return dispatch({
                type: 'ERROR',
                payload: error.response.data
            })
        }
    }
}


export function postDog(payload) {
    return async function () {
        try {
            await axios.post(`http://localhost:3001/dogs`, payload)
        } catch (error) {
            console.log(error.response)

        }
    }
}

export function filterCreated(origen) {
    return {
        type: "FILTER_CREATED",
        payload: origen
    }
}

export function orderByAbc(order) {
    return {
        type: 'ORDER_BY_ABC',
        payload: order
    }
}

export function orderByWeight(payload) {
    return {
        type: 'ORDER_BY_WEIGHT',
        payload,
    }
}

export function filterByTemper(payload) {
    return {
        type: 'FILTER_BY_TEMPER',
        payload,
    }
}

export function dogDeleted(id) {
    return async function () {
        try {
            await axios.delete(`http://localhost:3001/dogs/delete/${id}`)
        } catch (error) {
            console.log(error.response)

        }
    }
}
