const   {getAll,post,deleteacc,updateacc,getOne} =require  ('../models/schollcourses')


const get = function(req, res) {
    getAll(function(err, results) {
        if(err) res.status(500).send(err);
        else res.json(results)
        
    })
  } 
  
  
  const posted=( function(req, res) {
  
    const accData = req.body; 
   
    post(accData, function(err, result) {
        if (err) res.status(500).send(err);
        else res.status(201).json(result);
    });
  })
  
  const put=( function(req, res) {
    const id = (req.params.id); 
    const updatedacc = req.body;
    updateacc(id, updatedacc, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  })
  
   const deleted=( function(req, res) {
    const id = (req.params.id);
    deleteacc(id, function(err, result) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result);
      }
    });
  }); 
   const getOnecourse=( function(req, res) {
    var w=req.params.name
    getOne(w,(err,results)=>{
        if(err)
            res.status(500).send(err)
        
    
        else
           { res.status(201).json(results)}
        
    })
}    )

  module.exports={
    get,deleted,put,posted,getOnecourse
  }