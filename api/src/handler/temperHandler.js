const {getTempDb}=require('../controllers/temperController/getTemperController.js');

const getTemperHandler= async(req,res, next) =>{
    try {
        let response = await getTempDb();
        res.status(200).json(response)
        
} catch (error) {
    next('error en getTemperHandler', error)
}
}


module.exports ={ getTemperHandler}