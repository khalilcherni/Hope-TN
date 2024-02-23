const express = require('express');
const router = express.Router();
const whatTheyNeedController = require('../controller/whattheyneed');

router.post('/post', whatTheyNeedController.createNeed);
router.get('/get', whatTheyNeedController.getAllNeeds);
router.get('/get/:id', whatTheyNeedController.getNeedById);
router.put('/update/:id', whatTheyNeedController.updateNeed);
router.delete('/delete/:id', whatTheyNeedController.deleteNeed);

module.exports = router;
