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
            },
            addevent:function(req,res){
                var x=req.body
                events.add(x,function(err,results){
                    if(err){
                        res.status(500).send(err)
                       
                       }
                       else{
                        res.json(results)
                       }  
                })
            } ,
            update:(req, res) => {
                var x = req.body
                var y = req.params.id
              
                events.updateevents(x, y, function (err, results) {
                  if (err) {
                    res.status(500).send(err)
                  } else {
                    res.json(results)
                  }
                });
                },
                getOneevents: function(req, res) {
                    var w=req.params.name
                    events.getOne(w,(err,results)=>{
                        if(err)
                            res.status(500).send(err)
                        
                    
                        else
                            res.status(201).json(results)
                        
                    })
                }    

}