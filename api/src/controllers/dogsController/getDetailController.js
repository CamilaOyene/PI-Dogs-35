const{Dog, Temper} = require('../../db.js');
const { getDogsApi } = require('./getDogsController');


const getDogById = async (id, source) => {
   try {
    const dog = 
    source === 'api'
    ? await getDogsApi.find(dog => dog.id === id)
    : await Dog.findByPk(id,{
        include:{
            model:Temper,
            attributes: ['id','name'],
        },
    });
    return dog;
   } catch (error) {
    console.log('error en controller getDogById', error)
   }
};

module.exports = {
    getDogById,
}