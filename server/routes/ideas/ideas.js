const express = require('express'); 

const { getIdeas, createIdea, getIdea, updateIdea, deleteIdea } = require('./'); 

const router = express.Router(); 

router.get('/ideas', getIdeas);
router.post('/ideas', createIdea);
router.get('/ideas', getIdea);
router.put('/ideas', updateIdea);
router.delete('/ideas', deleteIdea);

module.exports = router; 