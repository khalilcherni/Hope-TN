const connection=require("../Database/index")


module.exports={

    getAll:function(callback){
        const sql="SELECT * FROM `voluntarywork`"
        connection.query(sql,function(error,results,fields){
            callback(error,results)
        })
    }
}