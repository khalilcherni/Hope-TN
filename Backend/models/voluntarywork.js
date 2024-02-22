const connection=require("../Database/index")


module.exports={

    getAll:function(callback){
        const sql="SELECT * FROM `voluntarywork`"
        connection.query(sql,function(error,results,fields){
            callback(error,results)
        })
    },
    create: function(newVoluntaryWork, callback) {
        const sql = "INSERT INTO `voluntarywork` SET ?";
        connection.query(sql, newVoluntaryWork, function(error, result) {
            callback(error, result);
        });
    },
    update: function(voluntaryWorkId, updatedVoluntaryWork, callback) {
        const sql = "UPDATE `voluntarywork` SET ? WHERE `id` = ?";
        connection.query(sql, [updatedVoluntaryWork, voluntaryWorkId], function(error, result) {
            callback(error, result);
        });
    },
    remove: function(voluntaryWorkId, callback) {
        const sql = "DELETE FROM `voluntarywork` WHERE `id` = ?";
        connection.query(sql, voluntaryWorkId, function(error, result) {
            callback(error, result);
        });
    }
};