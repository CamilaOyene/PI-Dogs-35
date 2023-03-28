const { getDogById } = require('../controllers/dogsController/getDetailController.js')
const { getAllDogs, searchName } = require('../controllers/dogsController/getDogsController.js');
const { createDogDb } = require('../controllers/dogsController/postDogController.js');


const getDogsHandler = async (req, res) => {
    const { name } = req.query
    const response = await getAllDogs();
    let dogByName = await searchName(name)
    try {
        if (name) {
            if (dogByName.length > 0) {
                res.json(dogByName);
            }
        } else {
            res.json(response);
        }
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};


const getDetailHandler = async (req, res) => {
    const { id } = req.params;
    let dogById = await getDogById(id)
    try {
        if (dogById) {
            res.json(dogById)
        }
    } catch (error) {
        res.status(404).json({ error: error.message })

    }
}

const createDogsHandler = async (req, res) => {
    const { name, height, weight, life_span, image, temper } = req.body;
    try {
        let response = await createDogDb(name, height, weight, life_span, image, temper);
        res.status(201).send(response);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

module.exports = {
    getDetailHandler,
    getDogsHandler,
    createDogsHandler,
}