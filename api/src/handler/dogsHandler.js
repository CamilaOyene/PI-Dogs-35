const { getDogById } = require('../controllers/dogsController/getDetailController.js')
const { getAllDogs, searchName } = require('../controllers/dogsController/getDogsController.js');
const { createDogDb } = require('../controllers/dogsController/postDogController.js');


const getDogsHandler = async (req, res) => {
    const name = req.query
    try {
        if (name) {
            const dogByName = await searchName(name)
            res.status(200).json(dogByName);
        } else {
            const response = await getAllDogs();
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};


const getDetailHandler = async (req, res) => {
    const { id } = req.params;
    const source = inNan(id) ? 'bdd' : 'api';

    try {
        const response = await getDogById(id, source);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}

const createDogsHandler = async (req, res) => {
    const {name, height, weight, life_span, image,temper} = req.body;
    try {
        const response = await createDogDb(name, height, weight, life_span, image, temper);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getDetailHandler,
    getDogsHandler,
    createDogsHandler,
}