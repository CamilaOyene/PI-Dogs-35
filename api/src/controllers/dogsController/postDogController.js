const { Dog, Temper } = require('../../db.js');

const createDogDb = async (name, height, weight, life_span, image, temper) => {
    let dog= await Dog.create({
        name,
        height,
        weight,
        life_span,
        image,
    })

    let temperament = await Temper.findAll({
        where:{
            name:temper
        }, attributes:['id','name']
    })

    await dog.addTemper(temperament)
    return dog

}

module.exports ={
    createDogDb,
}