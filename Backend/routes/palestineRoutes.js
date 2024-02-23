// routes/palestineRoutes.js

const express = require('express');
const router = express.Router();
const palestineController = require('../controllers/palestineController');

router.post('/palestine', palestineController.createPalestine);
router.get('/palestine', palestineController.getAllPalestine);
router.get('/palestine/:id', palestineController.getPalestineById);
router.put('/palestine/:id', palestineController.updatePalestine);
router.delete('/palestine/:id', palestineController.deletePalestine);

module.exports = router;
