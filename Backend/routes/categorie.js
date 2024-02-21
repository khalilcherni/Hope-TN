const express = require('express');
const router = express.Router();


const { getALLCategorie, addCategorie, update } = require('../controller/categorie');





router.get('/get', getALLCategorie);
router.post('/add',addCategorie)
router.put('/put/:id',update)

module.exports=router