const express = require('express'); 


const { getMinions, createMinion, getMinion, updateMinion, deleteMinion } = require(); 
const router = express.Router(); 

router.get('/minions', getMinions); 
router.post('/minions', createMinion); 
router.get('/minions/:id', getMinion); 
router.put('/minions/id', updateMinion); 
router.delete('/minions/:id', deleteMinion);

module.exports = router; 