
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sexes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sexes').insert([
        {sex: 'male'},
        {sex: 'female'}
      ]);
    });
};
