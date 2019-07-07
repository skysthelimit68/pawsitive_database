
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('application_status').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('application_status').insert([
        {status: 'Awaiting Review'},
        {status: 'Under Review'},
        {status: 'Approved'},
        {status: 'Rejected'}
      ]);
    });
};
