const { Router } = require('express');
const dogsRouter = require("./dogsRouter")
const temperRouter= require("./temperRouter")


const mainRouter = Router();

mainRouter.use("/dogs", dogsRouter);
mainRouter.use('/temperaments', temperRouter);


module.exports = mainRouter;
