const db = require('../data/dbConfig.js')
const mappers = require('./mappers.js');

module.exports = {
    getAll,
    get,
    getBy,
    getAnimals,
    insert,
    update,
    remove
}

//get all shelters
function getAll() {
    return db('shelters')
}

//get shelter by filter
function getBy(filter) {
    return db('shelter')
    .where(filter)
}

//get animals by shelter id
function getAnimals(id) {
    let query = db
        .select('animals.id', 'animals.name', 'species.species', 'animals.isMale as sex', 'shelters.shelter', 'animal_status.status', 'shelter_locations.location')
        .from('animals')
        .innerJoin('species', 'animals.species_id', 'species.id')
        .innerJoin('shelters', 'animals.shelter_id', 'shelters.id')
        .innerJoin('animal_status', 'animals.animal_status_id', 'animal_status.id')
        .innerJoin('shelter_locations', 'animals.shelter_location_id', 'shelter_locations.id')
        .where({ 'animals.shelter_id' : id})

        if(id) {
            return mappers.animalsToBody(query)
        } else {
            return null
        }  
}

//get shelter by id
function get(id) {
    let query = db('shelters');
    
    if(id) {
        query.where('shelters.id', id).first();
        const promises = [query, getLocations(id), getSubscriptions(id), getShelterFollowers(id)];

        return Promise.all(promises).then(function(results) {
            let[shelter, locations, subscriptions, followers] = results;
            if(shelter) {
                shelter.locations = locations;
                shelter.subscriptions = subscriptions;
                shelter.followers = followers;
                return mappers.shelterToBody(shelter)
            } else {
                return null;
            }
        })
    }
    return null;
}

//get shelter subscriptions by shelter id
function getSubscriptions(id) {
    if(id) {
        return db
        .select('shelter_subscriptions.id', 'subscriptions.subscription', 'shelter_subscriptions.expiration_date')
        .from('shelter_subscriptions')
        .innerJoin('subscriptions', 'shelter_subscriptions.subscription_id', 'subscriptions.id')
        .where({ 'shelter_subscriptions.shelter_id' : id })
    } else {
        return null;
    }    
}

//get shelter followers by shelter id
function getShelterFollowers(id) {
    if(id) {
        return db
        .select('shelter_followers.user_id','users.username')
        .from('shelter_followers')
        .innerJoin('users', 'shelter_followers.user_id','users.id')
        .where({ 'shelter_followers.shelter_id' : id })
    }
}

//get shelter locations by shelter id
function getLocations(id) {
    return db
    .select('shelter_locations.location', 'shelter_locations.street_address', 'shelter_locations.city', 'shelter_locations.state', 'shelter_locations.zip_code', 'shelter_locations.phone')
    .from('shelter_locations')
    .where({ 'shelter_id' : id })
}

function insert(shelter) {
    return db('shelters')
    .insert(shelter, 'id')
    .then( ([id]) => get(id))
}

function update(id, change) {
    return db('shelters')
    .where({ id })
    .update(change)
    .then(updatedShelter => updatedShelter ? get(id) : null)
}

function remove(id) {
    return db('shelters')
    .where({ id })
    .del();
}