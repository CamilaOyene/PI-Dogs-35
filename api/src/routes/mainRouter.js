const { Router } = require('express');
const dogsRouter = require("./dogsRouter")
const temperRouter= require("./temperRouter")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

mainRouter.use("/dogs", dogsRouter);
mainRouter.use('/temperaments', temperRouter);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = mainRouter;
