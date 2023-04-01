import axios from 'axios';

export function getAllDogs(){
    return async function (dispatch){
        try {
            let json= await axios('http://localhost:3001/dogs')
            return dispatch({
                type: 'GET_DOGS',
                payload: json.data
            })
        } catch (error) {
            console.log('error getAllDogs', error)
            return dispatch({
                type:'ERROR',
                payload: error.response.data
            })
        }
    }
}

export function getDogsByName(name){
    return async function(dispatch){
        try {
            let json= await axios(`http://localhost:3001/dogs?name=${name}`)
            return dispatch({
                type: 'GET_DOGS_BY_NAME',
                payload: json.data
            })
        } catch (error) {
            console.log("error getDogsByName", error)
            return dispatch({
                type:'ERROR',
                payload: error.response.data
            })
        }
    }
}

export function getDogsById(id){
    return async function(dispatch){
        try {
            let json= await axios(`http://localhost:3001/dogs/${id}`)
            return dispatch({
                type: 'GET_DOG_BY_ID',
                payload: json.data
            })
        } catch (error) {
            console.log("error getDogsById", error)
            return dispatch({
                type:'ERROR',
                payload: error.response.data
            })
        }
    }
}

export function cleanDog(){
    return{
        type: 'CLEAN_DOG'
    }
}


export function getTempers(){
 return async function(dispatch){
    try {
        let json = await axios('http://localhost:3001/temperaments')
        console.log('soy get Tempers' , json.data)

        return dispatch({
            type: 'GET_TEMPERS',
            payload: json.data
        })        
    } catch (error) {
        console.log("error en get_tempers" , error )
        return dispatch({
            type:'ERROR',
            payload: error.response.data
        })
    }
 }
}


export function postDog(payload){
    return async function (){
        try {
            await axios.post(`http://localhost:3001/dogs`, payload)
        } catch (error) {
            console.log(error)
           
        }
    }
}


// export function getDogsByTemper(temper){
//     console.log('soy temper' , temper)
//     return{
//         type: 'DOGS_BY_TEMPER',
//         payload: temper
//     }
// }
