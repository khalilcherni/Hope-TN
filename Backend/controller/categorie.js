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
    },
    addCategorie:function(req,res){
        var x=req.body
        categorie.add(x,function(err,results){
            if(err){
                res.status(500).send(err)
               
               }
               else{
                res.json(results)
               }  
        })
    },
    update:(req, res) => {
        var x = req.body
        var y = req.params.id
      
        categorie.updatecategorie(x, y, function (err, results) {
          if (err) {
            res.status(500).send(err)
          } else {
            res.json(results)
          }
        });
        },
        deleteCategorie:(req, res) => {
            var id= req.params.id
          
            categorie.deleteproduct( id, function (err, results) {
              if (err) {
                res.status(500).send(err)
              } else {
                res.json(results)
              }
            });
            },
            getOnecategorie: function(req, res) {
                var w=req.params.categorie
                categorie.getOne(w,(err,results)=>{
                    if(err)
                        res.status(500).send(err)
                    
                
                    else
                        res.status(201).json(results)
                    
                })
            }    
    }
