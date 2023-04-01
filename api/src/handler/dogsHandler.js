const { getDogById } = require('../controllers/dogsController/getDetailController.js')
const { getAllDogs, searchName } = require('../controllers/dogsController/getDogsController.js');
const { createDogDb } = require('../controllers/dogsController/postDogController.js');


const getDogsHandler = async (req, res, next) => {
    const { name } = req.query
    const response = await getAllDogs();
    let dogByName = await searchName(name)
    try {
        if (name) {
            if (dogByName.length > 0) {
                res.json(dogByName);
            }else{
                res.status(404).send(`Error 404. No se encuentran datos para la raza ${name}`)
            }
        } else {
            if(response){
                 res.status(200).send(response)
            }else{
                res.status(404).send('Error 404. Perros no encontrados.')
            }
        }
    } catch (error) {
        next('Error en handler getDogshandler/name', error)
    }
};


const getDetailHandler = async (req, res) => {
    const { id } = req.params;
    let dogById = await getDogById(id)
    try {
        if (dogById) {
            res.status(200).send(dogById)
        }else{
            res.status(404).send('Error 404. No se encontraron datos para el id.')
        }
    } catch (error) {
        next('Error en handler getDetailHandler', error)
    }
}

const createDogsHandler = async (req, res) => {
    const { name, height, weight, life_span, image, temper } = req.body;
    try {
        let response = await createDogDb(name, height, weight, life_span, image, temper);
        res.status(201).send(response);
    } catch (error) {
        next('Error en createDogsHandler', error)
    }
}

module.exports = {
    getDetailHandler,
    getDogsHandler,
    createDogsHandler,
}