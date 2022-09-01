const express = require('express'); 


const { getMinions, createMinion, deleteMinion, updateMinion, getMinion, sendMinion  } = require('../controllers/minions'); 

const router = express.Router(); 

router.param('minionId', getMinion);

router.get('/', getMinions); 
router.post('/', createMinion); 
router.get('/:minionId', sendMinion); 
router.put('/:minionId', updateMinion); 
router.delete('/:minionId', deleteMinion);

module.exports = router; 