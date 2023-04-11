const axios = require('axios');
const { Dog, Temper } = require('../../db.js');
const { Op } = require('sequelize')
const { API_KEY } = process.env



const getDogsApi = async () => {

    let dogsApi = await axios(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`);
    let response = await dogsApi.data.map((dog) => { //traigo los perros de la api y muestro su informacion
        return {
            id: dog.id,
            name: dog.name,
            image: dog.image.url,
            weightMin: dog.weight.metric.slice(0, 2).replace(" ", ""),
            weightMax: dog.weight.metric.slice(4).replace(" ", ""),
            heightMin: dog.height.metric.slice(0, 2).replace(" ", ""),
            heightMax: dog.height.metric.slice(4).replace(" ", ""),
            life_span: dog.life_span,
            tempers: dog.temperament ? dog.temperament : 'Sin temperamentos'
        }
    })
    return response
}

const getDbDogs = async () => {
    let dogsInDb = await Dog.findAll({   //traigo los perros de la BD con su modelo Temper
        include: {
            model: Temper,
            attributes: ['id','name'],
            through: {
                attributes: []
            }
        }
    })
    return dogsInDb
}


const getAllDogs = async () => {
    let dataApi = await getDogsApi();
    let dataDb = await getDbDogs();
    let dataT = await dataDb.concat(dataApi) // uno la info de la BD y API
    return dataT;
}

const getDogsByNameDb = async (name) => {
    try {
        let dogsByName = await Dog.findAll({
            where: {            //estoy buscando un perro por su nombre en BD con la where clausula 
                name: {
                    [Op.iLike]: '%' + name + '%'
                }
            },
            include: {
                model: Temper,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        })
        return dogsByName
    } catch (error) {
        console.log('Error en controller getControllersCountries ' + error)
    }
}

const getDogsByNameApi = async (name) => {
    try {
        let allDogs = await getDogsApi()
        let dogByName = await allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
        return dogByName //filtro el array de perros API y busco un nombre que incluya lo que viene por parametro
    }
    catch (error) {
        console.log('Error en controler getDogByNameApi', error)
    }
}

const searchName = async (name) => {
    let dogsApi = await getDogsByNameApi(name);
    let dogsDb = await getDogsByNameDb(name);
    let allNameDogs = await dogsDb.concat(dogsApi); // uno busquedas por nombre 
    return allNameDogs
}

module.exports = {
    getAllDogs,
    searchName,
    getDogsApi
}