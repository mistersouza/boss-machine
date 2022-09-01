const express = require('express'); 


const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('../db.js'); 

const router = express.Router(); 

router.get('/minions', getAllFromDatabase); 
router.post('/minions', addToDatabase); 
router.get('/minions/:id', getFromDatabaseById); 
router.put('/minions/id', updateInstanceInDatabase); 
router.delete('/minions/:id', deleteFromDatabasebyId);

module.exports = router; 