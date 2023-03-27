const {getTempDb}=require('../controllers/temperController/getTemperController');

const getTemperHandler= async(req,res) =>{
    try {
        const response = await getTempDb();
        res.status(200).json(response)
        
} catch (error) {
    res.status(400).json({error: error.message})
}
}
module.exports={getTemperHandler}