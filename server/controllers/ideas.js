const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId
} = require('../db.js');

const getIdea = (req, res, next, id) => {
    const idea = getFromDatabaseById(id); 

    if (idea) {
        req.idea = idea; 
        next(); 
    } else {
        res.status(404).send(); 
    }
}

const getIdeas = (req, res, next) => {
    res.send(getAllFromDatabase('ideas')); 
}

const createIdea = (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body); 
    res.status(201).send(newIdea); 
}

const sendIdea = (req, res, next) => {
    res.send(req.idea); 
}

const updateIdea = (req, res, next) => {
    const updatedIdea = updateInstanceInDatabase('ideas', req.body); 
    res.send(updatedIdea); 
}

const deleteIdea = (req, res, next) => {
    const deletedIdea = deleteFromDatabasebyId('ideas'); 
    if (deletedIdea) {
        res.status(204); 
    } else {
        res.status(500); 
    }
    res.send(); 
}






module.exports = {
    getIdea,
    getIdeas,
    createIdea,
    sendIdea, 
    updateIdea,
    deleteIdea
}