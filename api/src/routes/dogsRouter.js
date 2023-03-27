const {Router} = require("express");
const dogsRouter = Router();
const {
    getDetailHandler,
    getDogsHandler,
    createDogsHandler
} = require('../handler/dogsHandler');

dogsRouter.get('/', getDogsHandler);
dogsRouter.get('/:id',getDetailHandler);
dogsRouter.post('/',createDogsHandler);


module.exports= dogsRouter;