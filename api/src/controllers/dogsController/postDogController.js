const { Dog, Temper } = require('../../db.js');
const { getTempDb } = require('../temperController/getTemperController.js')

const createDogDb = async (name, heightMin,heightMax, weightMin,weightMax, life_span, image, tempers) => {
    let dog= await Dog.create({
        name,
        heightMin,
        heightMax,
        weightMin,
        weightMax,
        life_span,
        image,
        createDb:true,
    })
    await getTempDb()
    
    let temperament = await Temper.findAll({        //busca en la tabla Temper y devuelve el que coinsida con la clausula where
        where:{
            name:tempers,
        },attributes:['id','name']
    })

    await dog.addTemper(temperament)            // asocia el temperamento al perro  y devuelve el perro completo
    
    return 'Creado exitosamente'

}

module.exports ={
    createDogDb,
}