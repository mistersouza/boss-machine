const express = require('express');

const ideasRouter = require('./routes/ideas.js'); 
const minionsRouter = require('./routes/minions.js'); 
const meetingsRouter = require('./routes/meetings.js');


const apiRouter = express.Router();

apiRouter.use('/ideas', ideasRouter); 
apiRouter.use('/minions', minionsRouter); 
apiRouter.use('/meetings', meetingsRouter); 

module.exports = apiRouter;
