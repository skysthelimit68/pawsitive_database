
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('animal_status').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('animal_status').insert([
        {status: 'Available for Adoption'},
        {status: 'Available for Foster'},
        {status: 'Available for Adoption & Foster'},
        {status: 'Adopted'},
        {status: 'Adoption Pending'},
        {status: 'Inactive'}
      ]);
    });
};
