const express = require('express');
const router = express.Router();


const { getALLCategorie, addCategorie, update, deleteCategorie, getOnecategorie } = require('../controller/categorie');






router.get('/get', getALLCategorie);
router.post('/add',addCategorie)
router.put('/put/:id',update)
router.delete('/delete/:id',deleteCategorie)
router.get('/get/:name',getOnecategorie)

module.exports=router