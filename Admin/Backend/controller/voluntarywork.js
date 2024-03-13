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
    },

    addVoluntaryWork: function(req, res) {
        var newVoluntaryWork = req.body;
        voluntarywork.create(newVoluntaryWork, function(err, results) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(results);
            }
        });
    },
    updateVoluntaryWork: (req, res) => {
        var updatedVoluntaryWork = req.body;
        var voluntaryWorkId = req.params.id;

        voluntarywork.update(voluntaryWorkId, updatedVoluntaryWork, function(err, results) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(results);
            }
        });
    },
    deleteVoluntaryWork: (req, res) => {
        var voluntaryWorkId = req.params.id;

        voluntarywork.remove(voluntaryWorkId, function(err, results) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(results);
            }
        });
    }
};