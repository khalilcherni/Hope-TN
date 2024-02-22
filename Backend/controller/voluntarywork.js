const voluntarywork=require("../models/voluntarywork")


module.exports={
    getAllVoluntaryWork:(req,res)=>{
        voluntarywork.getAll(function(err,results){
            if(err){
                res.status(500).send(err)
            }else{
                res.json(results)
            }
        })
    }

}