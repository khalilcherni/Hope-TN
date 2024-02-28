const express = require('express');
const router = express.Router();
const profileController = require('../controller/Profile');

// Route to get all profiles
router.get('/getAll', profileController.getAllProfiles);

// Route to create a new profile
router.post('/add', profileController.createProfile);

// Route to get a profile by ID
router.get('/:id', profileController.getProfileById);

// Route to update a profile by ID
router.put('/:id', profileController.updateProfileById);

// Route to delete a profile by ID
router.delete('/:id', profileController.deleteProfileById);

module.exports = router;
