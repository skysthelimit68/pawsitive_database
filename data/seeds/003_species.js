
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('species').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('species').insert([
        {species: 'Dog'},
        {species: 'Cat'}
      ]);
    });
};
