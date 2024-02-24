
const express = require('express');
const router = express.Router();
const supportersController = require('../controller/supporters');

router.post('/post', supportersController.createSupporter);
router.get('/get', supportersController.getAllSupporters);
router.get('/get/:id', supportersController.getSupporterById);
router.put('/update/:id', supportersController.updateSupporter);
router.delete('/delete/:id', supportersController.deleteSupporter);

module.exports = router;
