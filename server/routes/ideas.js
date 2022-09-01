const express = require('express'); 

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('../db.js'); 

const router = express.Router(); 

router.get('/ideas', getAllFromDatabase);
router.post('/ideas', addToDatabase);
router.get('/ideas/:id', getFromDatabaseById);
router.put('/ideas/:id', updateInstanceInDatabase);
router.delete('/ideas/:id', deleteFromDatabasebyId);

module.exports = router; 