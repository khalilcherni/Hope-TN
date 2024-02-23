const WhatTheyNeed = require('../models/whattheyneed');

const createNeed = (req, res) => {
    const needData = req.body;
    WhatTheyNeed.createNeed(needData, (err, result) => {
        if (err) {
            console.error('Error creating need: ', err);
            return res.status(500).json({ error: 'Error creating need' });
        }
        res.status(201).json({ message: 'Need created successfully' });
    });
};

const getAllNeeds = (req, res) => {
    WhatTheyNeed.getAllNeeds((err, results) => {
        if (err) {
            console.error('Error retrieving needs: ', err);
            return res.status(500).json({ error: 'Error retrieving needs' });
        }
        res.status(200).json(results);
    });
};

const getNeedById = (req, res) => {
    const needId = req.params.id;
    WhatTheyNeed.getNeedById(needId, (err, result) => {
        if (err) {
            console.error('Error retrieving need: ', err);
            return res.status(500).json({ error: 'Error retrieving need' });
        }
        if (!result) {
            return res.status(404).json({ message: 'Need not found' });
        }
        res.status(200).json(result);
    });
};

const updateNeed = (req, res) => {
    const needId = req.params.id;
    const needData = req.body;
    WhatTheyNeed.updateNeed(needId, needData, (err, result) => {
        if (err) {
            console.error('Error updating need: ', err);
            return res.status(500).json({ error: 'Error updating need' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Need not found' });
        }
        res.status(200).json({ message: 'Need updated successfully' });
    });
};

const deleteNeed = (req, res) => {
    const needId = req.params.id;
    WhatTheyNeed.deleteNeed(needId, (err, result) => {
        if (err) {
            console.error('Error deleting need: ', err);
            return res.status(500).json({ error: 'Error deleting need' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Need not found' });
        }
        res.status(200).json({ message: 'Need deleted successfully' });
    });
};

module.exports = { createNeed, getAllNeeds, getNeedById, updateNeed, deleteNeed };
