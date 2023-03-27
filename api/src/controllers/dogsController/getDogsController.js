const axios= require('axios');
const {Dog,Temper} = require('../../db.js');
const {Op}= require('sequelize')
const {API_KEY} = process.env



const getDogsApi= async()=>{

    let dogsApi= await axios(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`);
    let response= await dogsApi.data.map((dog)=>{
        return{
            id:dog.id,
            name:dog.name,
            image:dog.image.url,
            weight:dog.weight.metric,
            height:dog.height.metric,
            life_span: dog.life_span,
            temper: dog.temperament,
        }
    })
 return response
}

const getDbDogs = async()=>{
    return await Dog.findAll({
        include:{
            model:Temper,
            attribute: ['id','name'],
            through:{
                attributes:[]
            }
        }
    })
}

const getAllDogs = async()=>{
    const dataApi= await getDogsApi();
    const dataDb= await getDbDogs();
    const dataT = await dataDb.concat(dataApi)

    return dataT;
}

const getDogsByNameDb= async(name)=>{
    try{
      let  dogsByName= await Dog.findAll({
            where:{
                name:{
                [Op.iLike]: '%' + name + '%'
                }
            },
            include:{
                model: Temper
            }
        })
        return dogsByName
    }catch(error){
        console.log('Error getDogsByName' + error)
    }
}

    const getDogsByNameApi = async(name)=>{
        try{
            let dogsByName= await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}/?api_key=${API_KEY}`)
            let response = dogsByName.data.filter(dog=> dog.name === name)
            return response
        }
        catch(error){
            console.log('Error en controler getDogByNameApi', error)
        }
    }

    const searchName= async(name) =>{
        let dogsApi= getDogsByNameApi();
        let dogsDb = getDogsByNameDb();
        let allNameDogs= dogsDb.concat(dogsApi);
        return allNameDogs
    }

module.exports= {
    getAllDogs,
    searchName,
    getDogsApi,
}