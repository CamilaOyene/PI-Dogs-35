const { Dog, Temper } = require('../../db.js');

const createDogDb = async (name, height, weight, life_span, image, temper) => {
    let dog= await Dog.create({
        name,
        height,
        weight,
        life_span,
        image,
    })

    let temperament = await Temper.findAll({        //busca en la tabla Temper y devuelve el que coinsida con la clausula where
        where:{
            name:temper,
        }, attributes:['id','name']
    })

    await dog.addTemper(temperament)            // asocia el temperamento al perro  y devuelve el perro completo
    return dog

}

module.exports ={
    createDogDb,
}