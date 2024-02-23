
const connection = require('../Database/index.js');

const createSupporter = (supporterData, callback) => {
    const { image, name, poitns } = supporterData;
    const sql = 'INSERT INTO supporters (image, name, poitns) VALUES (?, ?, ?)';
    connection.query(sql, [image, name, poitns], callback);
};

const getAllSupporters = (callback) => {
    const sql = 'SELECT * FROM supporters';
    connection.query(sql, callback);
};

const getSupporterById = (id, callback) => {
    const sql = 'SELECT * FROM supporters WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result[0]);
    });
};

const updateSupporter = (id, supporterData, callback) => {
    const { image, name, poitns } = supporterData;
    const sql = 'UPDATE supporters SET image = ?, name = ?, poitns = ? WHERE id = ?';
    connection.query(sql, [image, name, poitns, id], callback);
};

const deleteSupporter = (id, callback) => {
    const sql = 'DELETE FROM supporters WHERE id = ?';
    connection.query(sql, [id], callback);
};

module.exports = { createSupporter, getAllSupporters, getSupporterById, updateSupporter, deleteSupporter };
