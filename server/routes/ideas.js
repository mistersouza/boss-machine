const express = require('express'); 

const { getIdea, getIdeas, createIdea, sendIdea, updateIdea, deleteIdea } = require('../controllers/ideas.js'); 

const checkMillionDollarIdea = require('../middleware/checkMillionDollarIdea.js'); 

const router = express.Router(); 

router.param('ideaId', getIdea); 

router.get('/', getIdeas);
router.post('/', checkMillionDollarIdea, createIdea);
router.get('/:ideaId', sendIdea);
router.put('/:ideaId', updateIdea);
router.delete('/:ideaId', deleteIdea);

module.exports = router; 