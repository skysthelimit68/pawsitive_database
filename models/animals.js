const db = require('../data/dbConfig.js')
const mappers = require('./mappers.js');

module.exports = {
    getAll,
    get,
    insert,
    update,
    remove
}

function getAll() {
    return db
        .select('animals.id', 'animals.name', 'species.species', 'animals.isMale as sex', 'shelters.shelter', 'animal_status.status', 'shelter_locations.city', 'shelter_locations.state')
        .from('animals')
        .innerJoin('species', 'animals.species_id', 'species.id')
        .innerJoin('shelters', 'animals.shelter_id', 'shelters.id')
        .innerJoin('animal_status', 'animals.animal_status_id', 'animal_status.id')
        .innerJoin('shelter_locations', 'animals.shelter_location_id', 'shelter_locations.id')
}

function get(id) {
    let query = db
    .select('animals.id', 'animals.name', 'species.species', 'animals.isMale as sex', 'shelters.shelter', 'animal_status.status', 'shelter_locations.city', 'shelter_locations.state')
    .from('animals')
    .innerJoin('species', 'animals.species_id', 'species.id')
    .innerJoin('shelters', 'animals.shelter_id', 'shelters.id')
    .innerJoin('animal_status', 'animals.animal_status_id', 'animal_status.id')
    .innerJoin('shelter_locations', 'animals.shelter_location_id', 'shelter_locations.id');

    if(id) {
        query.where('animals.id', id).first();
        const promises = [query, getAnimalNotes(id)];

        return Promise.all(promises).then(function(results) {
            let[animal, notes] = results;

            if(animal) {
                animal.notes = notes;
                return mappers.animalToBody(animal)
            } else {
                return null
            }
        })
    } else {
        return null
    }
}

function getAnimalNotes(id) {
    if(id) {
        return db
        .select('animal_admin.note', 'shelter_users.username')
        .from('animal_admin')
        .innerJoin('shelter_users', 'animal_admin.shelter_user_id', 'shelter_users.id')
        .where({ 'animal_admin.animal_id' : id })
    }
}

function insert(animal) {
    return db('animals')
    .insert(animal, 'id')
    .then( ([id]) => get(id))
}

function update(id, change) {
    return db('animals')
    .where({ id })
    .update(change)
    .then(updatedUser => updatedUser ? get(id) : null)
}

function remove(id) {
    return db('animals')
    .where({ id })
    .del()
}