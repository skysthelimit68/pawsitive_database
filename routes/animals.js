const router = require('express').Router();
const Animals = require('../models/animals.js');


router.get('/', (req, res) => {
    Animals.getAll()
    .then( animals => {
        res.status(200).json(animals)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting animals", error: error.toString()})
    })
})

router.get('/:id', (req, res) => {
    Animals.get(req.params.id)
    .then( animal => {
        res.status(200).json(animal)
    })
    .catch ( error => {
        res.status(500).json({ message: "Error getting animal", error: error.toString()})
    })
})

module.exports = router;