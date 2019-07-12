exports.seed = async function(knex, Promise) {
	await knex('animal_status').del()
  await knex.raw('ALTER SEQUENCE animal_status_id_seq RESTART WITH 1')  
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
}

