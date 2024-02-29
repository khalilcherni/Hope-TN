const connection = require("../Database/index");

module.exports = {
    getAll: function(callback) {
        const sql = "SELECT * FROM `profile`";
        connection.query(sql, function(error, results, fields) {
            callback(error, results);
        });
    },

    // Implement the create method
    create: function(profileData, callback) {
        const { firstName, lastName, email, password } = profileData;
        const sql = "INSERT INTO `profile` (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
        connection.query(sql, [firstName, lastName, email, password], function(error, results, fields) {
            callback(error, results);
        });
    },

    // Implement the getById method
    getById: function(id, callback) {
        const sql = "SELECT * FROM `profile` WHERE id = ?";
        connection.query(sql, [id], function(error, results, fields) {
            callback(error, results[0]); // Assuming only one profile with the given ID
        });
    },

    // Implement the updateById method
    updateById: function(id, updatedProfileData, callback) {
        const { firstName, lastName, email, password } = updatedProfileData;
        const sql = "UPDATE `profile` SET firstName = ?, lastName = ?, email = ?, password = ? WHERE id = ?";
        connection.query(sql, [firstName, lastName, email, password, id], function(error, results, fields) {
            callback(error, results);
        });
    },

    // Implement the deleteById method
    deleteById: function(id, callback) {
        const sql = "DELETE FROM `profile` WHERE id = ?";
        connection.query(sql, [id], function(error, results, fields) {
            callback(error, results);
        });
    }
};
