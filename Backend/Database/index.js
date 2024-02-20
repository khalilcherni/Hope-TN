const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'root',
    database: '' 
  });
console.log("database is connected 👽");


module.exports=connection