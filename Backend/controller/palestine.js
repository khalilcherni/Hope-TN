// controllers/palestineController.js

const Palestine = require('../models/palastine');

exports.createPalestine = (req, res) => {
  Palestine.createPalestine(req.body, (error, results, fields) => {
    if (error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(201).json({ message: 'Palestine entry created successfully' });
    }
  });
};

exports.getAllPalestine = (req, res) => {
  Palestine.getAllPalestine((error, results, fields) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.json(results);
    }
  });
};

exports.getPalestineById = (req, res) => {
  Palestine.getPalestineById(req.params.id, (error, results, fields) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else if (results.length === 0) {
      res.status(404).json({ message: 'Palestine entry not found' });
    } else {
      res.json(results[0]);
    }
  });
};

exports.updatePalestine = (req, res) => {
  Palestine.updatePalestine(req.params.id, req.body, (error, results, fields) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ message: 'Palestine entry not found' });
    } else {
      res.json({ message: 'Palestine entry updated successfully' });
    }
  });
};

exports.deletePalestine = (req, res) => {
  Palestine.deletePalestine(req.params.id, (error, results, fields) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ message: 'Palestine entry not found' });
    } else {
      res.json({ message: 'Palestine entry deleted successfully' });
    }
  });
};
