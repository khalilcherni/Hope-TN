// controllers/helpController.js

const Help = require('../models/help');

exports.createHelp = (req, res) => {
  Help.createHelp(req.body, (error, results, fields) => {
    if (error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(201).json({ message: 'Help created successfully' });
    }
  });
};

exports.getAllHelp = (req, res) => {
  Help.getAllHelp((error, results, fields) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.json(results);
    }
  });
};

exports.getHelpById = (req, res) => {
  Help.getHelpById(req.params.id, (error, results, fields) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else if (results.length === 0) {
      res.status(404).json({ message: 'Help not found' });
    } else {
      res.json(results[0]);
    }
  });
};

exports.updateHelp = (req, res) => {
  Help.updateHelp(req.params.id, req.body, (error, results, fields) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ message: 'Help not found' });
    } else {
      res.json({ message: 'Help updated successfully' });
    }
  });
};

exports.deleteHelp = (req, res) => {
  Help.deleteHelp(req.params.id, (error, results, fields) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ message: 'Help not found' });
    } else {
      res.json({ message: 'Help deleted successfully' });
    }
  });
};
