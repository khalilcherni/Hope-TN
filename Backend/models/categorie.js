const connection=require('../Database/index')



module.exports={
    getAll:function(callback){
        const sql='SELECT * FROM `categorie`'
        connection.query(sql, function (error, results, fields) {
            callback(error, results);
          });
    },
    add:function(x,callback){
        const sql ='INSERT INTO categorie SET ? '
        connection.query(sql,x,function(error,results){
            callback(error,results)
        })
    },
    updatecategorie : (params, id, callback) => {
        const sql = 'UPDATE categorie SET `categorie`=?, `image`=?, `description`=? WHERE `id`=?';
        connection.query(sql, [params.categorie, params.image, params.description, id], function(err, results) {
          callback(err, results);
        });
      }
}