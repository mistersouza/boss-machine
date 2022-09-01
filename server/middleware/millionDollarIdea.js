
const checkMillionDollarIdea = ((req, res, next) => {
    const {numWeeks, weeklyRevenue } = req.body
    
    const millionDollarIdea = numWeeks * weeklyRevenue >= 1000000
    if (millionDollarIdea) {
        req.millionDollarIdea = millionDollarIdea;
        next(); 
    } else {
        res.status(404).send({ message: 'Think bigger' })
    }

     
})

module.checkMillionDollarIdea; 
