const express = require('express'); 

const { createMeeting, getAllFromDatabase, deleteAllFromDatabase } = require('../db.js'); 

const router = express.Router();

router.get('/meetings', getAllFromDatabase);
router.post('/meetings', createMeeting);
router.delete('/meetings', deleteAllFromDatabase);

module.exports = router; 