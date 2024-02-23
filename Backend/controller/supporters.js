
const Supporter = require('../models/supporters');

const createSupporter = (req, res) => {
    const supporterData = req.body;
    Supporter.createSupporter(supporterData, (err, result) => {
        if (err) {
            console.error('Error creating supporter: ', err);
            return res.status(500).json({ error: 'Error creating supporter' });
        }
        res.status(201).json({ message: 'Supporter created successfully' });
    });
};

const getAllSupporters = (req, res) => {
    Supporter.getAllSupporters((err, results) => {
        if (err) {
            console.error('Error retrieving supporters: ', err);
            return res.status(500).json({ error: 'Error retrieving supporters' });
        }
        res.status(200).json(results);
    });
};

const getSupporterById = (req, res) => {
    const supporterId = req.params.id;
    Supporter.getSupporterById(supporterId, (err, result) => {
        if (err) {
            console.error('Error retrieving supporter: ', err);
            return res.status(500).json({ error: 'Error retrieving supporter' });
        }
        if (!result) {
            return res.status(404).json({ message: 'Supporter not found' });
        }
        res.status(200).json(result);
    });
};

const updateSupporter = (req, res) => {
    const supporterId = req.params.id;
    const supporterData = req.body;
    Supporter.updateSupporter(supporterId, supporterData, (err, result) => {
        if (err) {
            console.error('Error updating supporter: ', err);
            return res.status(500).json({ error: 'Error updating supporter' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Supporter not found' });
        }
        res.status(200).json({ message: 'Supporter updated successfully' });
    });
};

const deleteSupporter = (req, res) => {
    const supporterId = req.params.id;
    Supporter.deleteSupporter(supporterId, (err, result) => {
        if (err) {
            console.error('Error deleting supporter: ', err);
            return res.status(500).json({ error: 'Error deleting supporter' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Supporter not found' });
        }
        res.status(200).json({ message: 'Supporter deleted successfully' });
    });
};

module.exports = { createSupporter, getAllSupporters, getSupporterById, updateSupporter, deleteSupporter };
