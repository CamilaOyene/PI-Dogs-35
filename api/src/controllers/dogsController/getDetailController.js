const { Dog, Temper } = require('../../db.js');
const { getDogsApi } = require('./getDogsController');

const getDogByIdApi= async(id)=>{
    try {
        let dogs = await getDogsApi()
        let dogById= await dogs.find(dog => dog.id == id) // busco en la api el perro con id == id
        return dogById
        
    } catch (error) {
        console.log('error en controller getDogById ', error)
    }
}

const getDogByIdDb= async(id)=>{
    try {
       let dog= await Dog.findByPk(id) // acá busco en la base de datos el modelo por su id
       let temperDog = await dog.getTempers() // acá traigo los temperamentos,
       let tempers = await temperDog.map( dog => dog.dataValues.name)//acá mapeo y muestro su nombre
       return {
        ...dog,
        tempers //acá los agrego al modelo dog
       }
    } catch (error) {
        console.log('error en controller getDogById ', error )
    }
}

const getDogById= async(id)=>{  
    if(id.length > 15){ //si el length es mayor a 15 es de la base de datos
        let dogByIdDb= await getDogByIdDb(id)
        return dogByIdDb
    }else{
        let dogByIdApi = await getDogByIdApi(id)
        return dogByIdApi
    }
}


module.exports = {
    getDogById,
}