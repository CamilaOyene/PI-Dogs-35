const {Router}= require('express');
const {getTemperHandler}=require('../handler/temperHandler')

const temperRouter= Router();

temperRouter.get('/', getTemperHandler)

module.exports = temperRouter;