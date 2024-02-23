// routes/helpRoutes.js

const express = require('express');
const router = express.Router();
const helpController = require('../controller/help');

router.post('/help', helpController.createHelp);
router.get('/help', helpController.getAllHelp);
router.get('/help/:id', helpController.getHelpById);
router.put('/help/:id', helpController.updateHelp);
router.delete('/help/:id', helpController.deleteHelp);

module.exports = router;
