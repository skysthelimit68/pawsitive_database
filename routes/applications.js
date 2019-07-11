const router = require('express').Router();
const Applications = require('../models/applications.js');

//get all applications by shelter id
router.get('/shelters/:id', (req, res) => {
    
    Applications.getApplicationsByShelter(req.params.id)
    .then( apps => {
        res.status(200).json(apps)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting applications", error: error.toString()})
    })
    
})

//get all applications by user id
router.get('/users/:id', (req, res) => {

    Applications.getApplicationsByUser(req.params.id)
    .then( apps => {
        res.status(200).json(apps)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting applications", error: error.toString()})
    })

})

//get application by application id
router.get('/:id', (req, res) => {

    Applications.get(req.params.id)
    .then( app => {
        res.status(200).json(app)
    })
    .catch (error => {
        res.status(500).json({ message: "Error getting application", error: error.toString()})
    })
})

module.exports = router;