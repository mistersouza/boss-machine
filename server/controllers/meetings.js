const {
    addToDatabase,
    createMeeting,
    getAllFromDatabase,
    deleteAllFromDatabase,
} = require('../db.js'); 

const newMeeting = (req, res, next) => {
    const meeting = addToDatabase('meetings', createMeeting()); 
    res.status(201).send(meeting); 
}

const getMeetings = (req, res, next) => {
    res.send(getAllFromDatabase('meetings')); 
}

const deleteMeetings = (req, res, next) => {
    deleteAllFromDatabase('meetings'); 
    res.status(204).send({ message: 'All meetings clear'}); 
}

module.exports = {
    newMeeting,
    getMeetings,
    deleteMeetings
}

