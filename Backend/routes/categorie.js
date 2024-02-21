const express = require('express');
const router = express.Router();


const { getALLCategorie } = require('../controller/categorie');





router.get('/get', getALLCategorie);

module.exports=router