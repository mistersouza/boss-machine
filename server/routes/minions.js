const express = require('express'); 


const { getAllMinions, createMinion, deleteMinion, updateMinion, getMinion, sendMinion  } = require('../controllers/minions'); 

const router = express.Router(); 

router.param('minions', getMinion);

router.get('/', getAllMinions); 
router.post('/', createMinion); 
router.get('/:minionId', sendMinion); 
router.put('/:minionId', updateMinion); 
router.delete('/:minionId', deleteMinion);

module.exports = router; 