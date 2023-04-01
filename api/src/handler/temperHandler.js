const {getTempDb}=require('../controllers/temperController/getTemperController');

const getTemperHandler= async(req,res, next) =>{
    try {
        const response = await getTempDb();
        res.status(200).json(response)
        
} catch (error) {
    next('error en getTemperHandler', error)
}
}
module.exports={getTemperHandler}