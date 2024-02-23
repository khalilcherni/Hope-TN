// models/helpModel.js
const connection =require ('../Database/index')
// const mysql = require('mysql');


const createHelp = (data, callback) => {
  const { name, description, location, phone } = data;
  const query = `INSERT INTO help (name, description, location, phone) VALUES (?, ?, ?, ?)`;
  connection.query(query, [name, description, location, phone], callback);
};

const getAllHelp = (callback) => {
  const query = `SELECT * FROM help`;
  connection.query(query, callback);
};

const getHelpById = (id, callback) => {
  const query = `SELECT * FROM help WHERE id = ?`;
  connection.query(query, [id], callback);
};

const updateHelp = (id, data, callback) => {
  const { name, description, location, phone } = data;
  const query = `UPDATE help SET name = ?, description = ?, location = ?, phone = ? WHERE id = ?`;
  connection.query(query, [name, description, location, phone, id], callback);
};

const deleteHelp = (id, callback) => {
  const query = `DELETE FROM help WHERE id = ?`;
  connection.query(query, [id], callback);
};

module.exports = {
  createHelp,
  getAllHelp,
  getHelpById,
  updateHelp,
  deleteHelp
};
