const connection = require("../Database/index.js")

const createPalestine = (data, callback) => {
  const { image, description } = data;
  const query = `INSERT INTO palestine (image, description) VALUES (?, ?)`;
  connection.query(query, [image, description], callback);
};

const getAllPalestine = (callback) => {
  const query = `SELECT * FROM palestine`;
  connection.query(query, callback);
};

const getPalestineById = (id, callback) => {
  const query = `SELECT * FROM palestine WHERE id = ?`;
  connection.query(query, [id], callback);
};

const updatePalestine = (id, data, callback) => {
  const { image, description } = data;
  const query = `UPDATE palestine SET image = ?, description = ? WHERE id = ?`;
  connection.query(query, [image, description, id], callback);
};

const deletePalestine = (id, callback) => {
  const query = `DELETE FROM palestine WHERE id = ?`;
  connection.query(query, [id], callback);
};

module.exports = {
  createPalestine,
  getAllPalestine,
  getPalestineById,
  updatePalestine,
  deletePalestine
};
