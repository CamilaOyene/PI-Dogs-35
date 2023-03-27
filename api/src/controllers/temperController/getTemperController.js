const axios = require('axios');
const { Dog, Temper } = require('../../db.js')
const { API_KEY } = process.env

const allTemper = async () => {
    const data = await axios(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`)
    const response = await data.data.map(t.temperament).join('').split(', ')
    const arrTemper = response.sort();

    const allTemperament = []

    for (let i = 0; i < arrTemper.length; i++) {
        if (!allTemperament.includes(arrTemper[i])) {
            allTemperament.push(arrTemper[i])
        }
    }
    return allTemperament
}

const createTemperDb = async () => {
    let temperByApi = await allTemper()

    temperByApi.forEach(temper => {
        Temper.findOrCreate({
            where: { name: temper }
        })
    })
    return temperByApi
}

const getTempDb = async () => {
    let temperDb= await Temper.findAll({include:{
        model:Dog
    }})
    if(!temperDb.length){
        let createTemper= createTemperDb()
        return createTemper
    }
    return temperDb
}


module.exports={
    getTempDb,
}