const express = require('express'); 

const { getMeetings, createMeeting, deleteMeeting } = require('./'); 

const router = express.Router();

router.get('/meetings', getMeetings);
router.post('/meetings', createMeeting);
router.delete('/meetings', deleteMeeting);

module.exports = router; 