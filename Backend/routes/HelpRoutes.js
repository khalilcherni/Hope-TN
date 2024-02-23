// routes/helpRoutes.js

const express = require('express');
const router = express.Router();
const helpController = require('../controller/help');

router.post('/post', helpController.createHelp);
router.get('/get', helpController.getAllHelp);
router.get('/get/:id', helpController.getHelpById);
router.put('/update/:id', helpController.updateHelp);
router.delete('/delete/:id', helpController.deleteHelp);

module.exports = router;
