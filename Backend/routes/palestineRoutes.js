// routes/palestineRoutes.js

const express = require('express');
const router = express.Router();
const palestineController = require('../controller/palestine');

router.post('/post', palestineController.createPalestine);
router.get('/get', palestineController.getAllPalestine);
router.get('/get/:id', palestineController.getPalestineById);
router.put('/update/:id', palestineController.updatePalestine);
router.delete('/delete/:id', palestineController.deletePalestine);

module.exports = router;
