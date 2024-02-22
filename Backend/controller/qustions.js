const questions=require("../models/questions")

module.exports = {
  getAllQuestions: (req, res) => {
      questions.getAll(function(err, results) {
          if (err) {
              res.status(500).send(err);
          } else {
              res.json(results);
          }
      });
  },
  addQuestion: function(req, res) {
      var newQuestion = req.body;
      questions.create(newQuestion, function(err, results) {
          if (err) {
              res.status(500).send(err);
          } else {
              res.json(results);
          }
      });
  },
  updateQuestion: (req, res) => {
      var updatedQuestion = req.body;
      var questionId = req.params.id;

      questions.update(questionId, updatedQuestion, function(err, results) {
          if (err) {
              res.status(500).send(err);
          } else {
              res.json(results);
          }
      });
  },
  deleteQuestion: (req, res) => {
      var questionId = req.params.id;

      questions.remove(questionId, function(err, results) {
          if (err) {
              res.status(500).send(err);
          } else {
              res.json(results);
          }
      });
  }
};