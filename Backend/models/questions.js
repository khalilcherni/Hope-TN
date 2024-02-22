const connection=require("../Database/index")

module.exports = {
    getAll: function(callback) {
        const sql = "SELECT * FROM `questions`";
        connection.query(sql, function(error, results, fields) {
            callback(error, results);
        });
    },

    create: function(newQuestion, callback) {
        const sql = "INSERT INTO `questions` SET ?";
        connection.query(sql, newQuestion, function(error, result) {
            callback(error, result);
        });
    },

    remove: function(questionId, callback) {
        const sql = "DELETE FROM `questions` WHERE `id` = ?";
        connection.query(sql, questionId, function(error, result) {
            callback(error, result);
        });
    },

    update: function(questionId, updatedQuestion, callback) {
        const sql = "UPDATE `questions` SET ? WHERE `id` = ?";
        connection.query(sql, [updatedQuestion, questionId], function(error, result) {
            callback(error, result);
        });
    }
};