const questions=require("../models/questions")

module.exports = {
    getAll: function(callback) {
      pool.query('SELECT * FROM questions', function(err, results) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });
    },
  
    create: function(newQuestion, callback) {
      pool.query('INSERT INTO questions SET ?', newQuestion, function(err, result) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, { id: result.insertId, ...newQuestion });
        }
      });
    },
  
    remove: function(questionId, callback) {
      pool.query('DELETE FROM questions WHERE id = ?', questionId, function(err, result) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, result.affectedRows > 0);
        }
      });
    },
}  