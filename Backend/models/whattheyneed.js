const connection = require('../Database/index.js');

const createNeed = (needData, callback) => {
    const { needs } = needData;
    const sql = 'INSERT INTO whatTheyNeed (needs) VALUES (?)';
    connection.query(sql, [needs], callback);
};

const getAllNeeds = (callback) => {
    const sql = 'SELECT * FROM whatTheyNeed';
    connection.query(sql, callback);
};

const getNeedById = (id, callback) => {
    const sql = 'SELECT * FROM whatTheyNeed WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result[0]);
    });
};

const updateNeed = (id, needData, callback) => {
    const { needs } = needData;
    const sql = 'UPDATE whatTheyNeed SET needs = ? WHERE id = ?';
    connection.query(sql, [needs, id], callback);
};

const deleteNeed = (id, callback) => {
    const sql = 'DELETE FROM whatTheyNeed WHERE id = ?';
    connection.query(sql, [id], callback);
};

module.exports = { createNeed, getAllNeeds, getNeedById, updateNeed, deleteNeed };
