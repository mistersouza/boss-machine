const express = require('express'); 

const { getIdea, getIdeas, createIdea, sendIdea, updateIdea, deleteIdea } = require('../controllers/ideas.js'); 

const router = express.Router(); 

router.param('/ideas', getIdea); 

router.get('/ideas', getIdeas);
router.post('/ideas', createIdea);
router.get('/ideas/:id', sendIdea);
router.put('/ideas/:id', updateIdea);
router.delete('/ideas/:id', deleteIdea);

module.exports = router; 