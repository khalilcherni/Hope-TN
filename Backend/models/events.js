const connection=require('../Database/index')

module.exports={
    getAll:function(callback){
        const sql='SELECT * FROM `events`'
        connection.query(sql, function (error, results, fields) {
            callback(error, results);
          });
    },
    add:function(x,callback){
        const sql ='INSERT INTO events SET ? '
        connection.query(sql,x,function(error,results){
            callback(error,results)
        })
    }
}