const Profile = require("../models/Profile");

module.exports = {
    // Create a new profile
    createProfile: (req, res) => {
        const { firstName, lastName, email, password } = req.body;
        Profile.create({ firstName, lastName, email, password }, function(err, newProfile) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).json(newProfile);
            }
        });
    },
    
    // Get all profiles
    getAllProfiles: (req, res) => {
        Profile.getAll(function(err, profiles) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(profiles);
            }
        });
    },
    
    // Get a single profile by ID
    getProfileById: (req, res) => {
        const { id } = req.params;
        Profile.getById(id, function(err, profile) {
            if (err) {
                res.status(500).send(err);
            } else if (!profile) {
                res.status(404).send('Profile not found');
            } else {
                res.json(profile);
            }
        });
    },
    
    // Update a profile by ID
    updateProfileById: (req, res) => {
        const { id } = req.params;
        const { firstName, lastName, email, password } = req.body;
        Profile.updateById(id, { firstName, lastName, email, password }, function(err, updatedProfile) {
            if (err) {
                res.status(500).send(err);
            } else if (!updatedProfile) {
                res.status(404).send('Profile not found');
            } else {
                res.json(updatedProfile);
            }
        });
    },
    
    // Delete a profile by ID
    deleteProfileById: (req, res) => {
        const { id } = req.params;
        Profile.deleteById(id, function(err, deletedProfile) {
            if (err) {
                res.status(500).send(err);
            } else if (!deletedProfile) {
                res.status(404).send('Profile not found');
            } else {
                res.json(deletedProfile);
            }
        });
    }
};
