const { Router } = require("express");
const dogsRouter = Router();
const {
    getDetailHandler,
    getDogsHandler,
    createDogsHandler,
    deleteDogHandler
} = require('../handler/dogsHandler');

dogsRouter.get('/', getDogsHandler);
dogsRouter.get('/:id', getDetailHandler);
dogsRouter.post('/', createDogsHandler);
dogsRouter.delete('/delete/:id', deleteDogHandler);


module.exports = dogsRouter;