
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animal_admin').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('animal_admin').insert([
        {shelter_user_id: 1, animal_id: 1, note: 'Vet check on 7/3/2019, good health' },
        {shelter_user_id: 6, animal_id: 6, note: 'New foster family will step in on 8/1/2019' },
        {shelter_user_id: 9, animal_id: 9, note: 'Additional litter box training might be required' }
      ]);
    });
};
