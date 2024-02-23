// models/PalastineModel.js


const createPalastine = (data, callback) => {
  const { name, description, location, phone } = data;
  const query = `INSERT INTO Palastine (name, description, location, phone) VALUES (?, ?, ?, ?)`;
  connection.query(query, [name, description, location, phone], callback);
};

const getAllPalastine = (callback) => {
  const query = `SELECT * FROM Palastine`;
  connection.query(query, callback);
};

const getPalastineById = (id, callback) => {
  const query = `SELECT * FROM Palastine WHERE id = ?`;
  connection.query(query, [id], callback);
};

const updatePalastine = (id, data, callback) => {
  const { name, description, location, phone } = data;
  const query = `UPDATE Palastine SET name = ?, description = ?, location = ?, phone = ? WHERE id = ?`;
  connection.query(query, [name, description, location, phone, id], callback);
};

const deletePalastine = (id, callback) => {
  const query = `DELETE FROM Palastine WHERE id = ?`;
  connection.query(query, [id], callback);
};

module.exports = {
  createPalastine,
  getAllPalastine,
  getPalastineById,
  updatePalastine,
  deletePalastine
};
