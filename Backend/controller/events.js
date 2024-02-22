const events =require('../models/events')

module.exports={
    getALLevents:(req,res)=>{
        events.getAll(function(err,results){
            if(err){
                res.status(500).send(err)
            }
        else{
        res.json(results)
        }
        })
            }
}