const categorie=require('../models/categorie')

module.exports={
    getALLCategorie:(req,res)=>{
categorie.getAll(function(err,results){
    if(err){
        res.status(500).send(err)
    }
else{
res.json(results)
}
})
    }
    }
