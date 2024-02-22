const connection =require('../Database/index')
const bcrypt = require('bcrypt');

const saltRounds = 10;

const getAll = (callback) => {
    const query = 'SELECT * FROM user ';
    connection.query(query, (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });

}
const getUser = (emailTerm, callback) => {
    const query = 'SELECT * FROM user WHERE email = ?';
    connection.query(query, [emailTerm], (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};


module.exports = { getAll,getUser };