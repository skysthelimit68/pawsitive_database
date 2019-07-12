
exports.seed = async function(knex, Promise) {
  await knex('application_status').del()
  await knex.raw('ALTER SEQUENCE application_status_id_seq RESTART WITH 1')  
  // Deletes ALL existing entries
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
