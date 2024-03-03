
const connection =require ('../Database/index')

module.exports = {

    getAll :(callback) => {
        const sql = 'SELECT * FROM `schoolcourses` '
        connection.query(sql, function (error, results, fields) {
          callback(error, results);
    })},

    post: function (accData, callback) {
      const sql = 'INSERT INTO `schoolcourses` SET ? ';
      connection.query(sql, accData, function (error, results, fields) {
        if (error) {
          callback(error, null); 
        } else {
          callback(null, results); 
        }
      });
    },
    
     deleteacc :function (id, callback){
        const sql='DELETE FROM `schoolcourses` WHERE `id` = ?';
        connection.query(sql,[id], function (error, results, fields) {
          callback(error, results);
      })}
      ,
     updateacc :function (id,updatedacc ,callback){
      const sql = 'UPDATE `schoolcourses` SET ? WHERE id= ?';
      const values = [updatedacc, id];
      connection.query(sql, values, function (error, results, fields) {
        callback(error, results);
      })},
      getOne: function (name,callback) {
        const sql=  'SELECT * FROM schoolcourses WHERE `name`=?'
        connection.query(sql,[name],function(error,results){
          callback(error, results);
        })
  
        }
}