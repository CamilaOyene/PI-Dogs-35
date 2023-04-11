const { Dog } = require('../../db.js');


const dogForDelete= async(id)=>{
    let dog= await Dog.findByPk(id)
    return dog
}

module.exports = {
dogForDelete
}