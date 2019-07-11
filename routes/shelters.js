const router = require('express').Router();
const Shelters = require('../models/shelters.js');


//get shelter by id
router.get('/:id', (req, res) => {
    Shelters.get(req.params.id)
    .then( shelter => {
        res.status(200).json(shelter)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting shelter", error: error.toString()})

    })
})

//get animals by shelter id
router.get('/:id/animals', (req, res) => {
    Shelters.getAnimals(req.params.id)
    .then( animals => {
        res.status(200).json(animals)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting animals", error: error.toString()})
    })
})


module.exports = router;