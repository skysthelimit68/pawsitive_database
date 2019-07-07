
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animals').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        {name: 'Sweetie Pie', species_id: 2, isMale: false, shelter_id: 1, animal_status_id: 1, shelter_location_id: 1},
        {name: 'Cutie Pie', species_id: 1, isMale: false, shelter_id: 2, animal_status_id: 1, shelter_location_id: 2},
        {name: 'Bully Pete', species_id: 1, isMale: true, shelter_id: 3, animal_status_id: 1, shelter_location_id: 3},
        {name: 'Tina', species_id: 1, isMale: false, shelter_id: 4, animal_status_id: 1, shelter_location_id: 4},
        {name: 'Nathan', species_id: 2, isMale: true, shelter_id: 5, animal_status_id: 1, shelter_location_id: 5},
        {name: 'Snow Ball', species_id: 2, isMale: false, shelter_id: 6, animal_status_id: 1, shelter_location_id: 6},
        {name: 'Jingle Bell', species_id: 2, isMale: true, shelter_id: 7, animal_status_id: 1, shelter_location_id: 7},
        {name: 'Mickey', species_id: 1, isMale: true, shelter_id: 8, animal_status_id: 1, shelter_location_id: 8},
        {name: 'Garfield', species_id: 2, isMale: true, shelter_id: 9, animal_status_id: 1, shelter_location_id: 9},
        {name: 'Coco', species_id: 1, isMale: true, shelter_id: 10, animal_status_id: 1, shelter_location_id: 10},
        {name: 'Max', species_id: 1, isMale: true, shelter_id: 3, animal_status_id: 1, shelter_location_id: 11},
        {name: 'Harper', species_id: 2, isMale: false, shelter_id: 8, animal_status_id: 1, shelter_location_id: 12},
        {name: 'Casey', species_id: 1, isMale: false, shelter_id: 1, animal_status_id: 1, shelter_location_id: 1},
        {name: 'Lucky.', species_id: 1, isMale: true, shelter_id: 2, animal_status_id: 1, shelter_location_id: 2},
        {name: 'Chelsea', species_id: 2, isMale: false, shelter_id: 3, animal_status_id: 1, shelter_location_id: 3},
        {name: 'Mr. EatALot', species_id: 1, isMale: true, shelter_id: 4, animal_status_id: 1, shelter_location_id: 4},
        {name: 'Ting Ting', species_id: 2, isMale: false, shelter_id: 5, animal_status_id: 1, shelter_location_id: 5},
        {name: 'Cody', species_id: 1, isMale: true, shelter_id: 6, animal_status_id: 1, shelter_location_id: 6},
        {name: 'Snow White', species_id: 2, isMale: false, shelter_id: 7, animal_status_id: 1, shelter_location_id: 7},
        {name: 'Rocky', species_id: 1, isMale: true, shelter_id: 8, animal_status_id: 1, shelter_location_id: 8},
        {name: 'Sophie', species_id: 1, isMale: false, shelter_id: 9, animal_status_id: 1, shelter_location_id: 9},
        {name: 'Mr. Socks', species_id: 2, isMale: true, shelter_id: 10, animal_status_id: 1, shelter_location_id: 10},
        {name: 'Lucy', species_id: 1, isMale: false, shelter_id: 3, animal_status_id: 1, shelter_location_id: 11},
        {name: 'Mr. Evil', species_id: 2, isMale: true, shelter_id: 8, animal_status_id: 1, shelter_location_id: 12},
        {name: 'Chance', species_id: 1, isMale: true, shelter_id: 1, animal_status_id: 1, shelter_location_id: 1}
      ]);
    });
};
