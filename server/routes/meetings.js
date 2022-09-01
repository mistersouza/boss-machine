const express = require('express'); 

const { getMeetings, newMeeting, deleteMeetings } = require('../controllers/meetings'); 

const router = express.Router();

router.get('/', getMeetings);
router.post('/', newMeeting);
router.delete('/', deleteMeetings);

module.exports = router; 