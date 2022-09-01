
const isMillionDollarIdea = (req, res, next) => {
    const {numWeeks, weeklyRevenue } = req.body
    
    const millionDollarIdea = Number(numWeeks) * Number(weeklyRevenue) >= 1000000
    if (!numWeeks || ! weeklyRevenue || isNaN(millionDollarIdea) || !millionDollarIdea) {
        res.status(400).send(); 
    } else {
        next(); 
    }
}

module.exports = isMillionDollarIdea; 
