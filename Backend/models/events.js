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
    },
    updateevents : (params, id, callback) => {
        const sql = 'UPDATE events SET `name`=?, `image`=?, `description`=? ,`location`=? ,`type`=? ,`startdate`=?,`enddate`=?,`registrationdeadline`=?  WHERE `id`=?';
        connection.query(sql, [params.name, params.description, params.image,params.location,params.type,params.startdate,params.enddate,params.registrationdeadline, id], function(err, results) {
          callback(err, results);
        });
      }
}