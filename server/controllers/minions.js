const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId
} = require('../db.js');

const getMinion = (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);
    if (minion) {
        req.minion = minion;
        next();
    } else {
        res.status(404).send();
    }
}

const getAllMinions = (req, res, next) => {
    res.send(getAllFromDatabase('minions')); 
}


const createMinion = (req, res, next) => { 
    const newMinion = addToDatabase('minions', req.body); 
    res.status(201).send(newMinion); 
}

const sendMinion = (req, res, next) => {
    res.send(req.minion); 
}; 

const updateMinion = (req, res, next) => {
    const updatedMinion = updateInstanceInDatabase('minions', req.body); 
    res.send(updatedMinion); 
}

const deleteMinion = (req, res, next) => {
    const deletedMinion = deleteFromDatabasebyId('minions', req.params.minionId); 
    if (deletedMinion) {
        res.status(204); 
    } else {
        res.status(500); 
    }

    res.send({ message: `${deletedMinion} deleted`})
}

module.exports = {
    getMinion, 
    sendMinion,
    getAllMinions,
    createMinion,
    updateMinion,
    deleteMinion
}