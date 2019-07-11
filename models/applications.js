const db = require('../data/dbConfig.js')
const mappers = require('./mappers.js');

module.exports = {
    getApplicationsByShelter,
    getApplicationsByUser,
    getBy,
    get,
    insert,
    update,
    remove
}

//get all applications by shelter id
function getApplicationsByShelter(id) {
    return db
    .select('applications.id', 'animals.name as animal_name', 'shelters.shelter', 'users.username', 'application_status.status')
    .from('applications')
    .innerJoin('animals', 'applications.animal_id', 'animals.id')
    .innerJoin('shelters', 'applications.shelter_id', 'shelters.id')
    .innerJoin('users', 'applications.user_id', 'users.id')
    .innerJoin('application_status', 'applications.application_status_id', 'application_status.id') 
    .where({ 'applications.shelter_id' : id})
}

//get all applications by user id
function getApplicationsByUser(id) {
    return db
    .select('applications.id', 'animals.name as animal_name', 'shelters.shelter', 'users.username', 'application_status.status')
    .from('applications')
    .innerJoin('animals', 'applications.animal_id', 'animals.id')
    .innerJoin('shelters', 'applications.shelter_id', 'shelters.id')
    .innerJoin('users', 'applications.user_id', 'users.id')
    .innerJoin('application_status', 'applications.application_status_id', 'application_status.id') 
    .where({ 'applications.user_id' : id})
}

//get all applications by application id
function get(id) {
    if(id){
        return db
        .select('applications.id', 'animals.name as animal_name', 'shelters.shelter', 'users.username', 'application_status.status')
        .from('applications')
        .innerJoin('animals', 'applications.animal_id', 'animals.id')
        .innerJoin('shelters', 'applications.shelter_id', 'shelters.id')
        .innerJoin('users', 'applications.user_id', 'users.id')
        .innerJoin('application_status', 'applications.application_status_id', 'application_status.id') 
        .where({ 'applications.id': id })
    } else {
        return null;
    }
}

function getBy(filter) {
    return db('applications')
    .where (filter)
}

function insert(application) {
    return db('applications')
    .insert(application, 'id')
    .then( ([id]) => get(id))
}

function update(id, change) {
    return db('applications')
    .where({ id })
    .update(change)
    .then(updatedApplication => updatedApplication ? get(id) : null)
}

function remove(id) {
    return db('applications')
    .where({ id })
    .del();
}