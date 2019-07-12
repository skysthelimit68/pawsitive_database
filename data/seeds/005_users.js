const bcrypt = require('bcryptjs');

exports.seed = async function(knex, Promise) {
  await knex('users').del()
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1')  
  // Deletes ALL existing entries
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'paws', password:bcrypt.hashSync("1234", 12)},
        {username: 'purr', password:bcrypt.hashSync("1234", 12)},
        {username: 'meow', password:bcrypt.hashSync("1234", 12)},
        {username: 'woof', password:bcrypt.hashSync("1234", 12)},
        {username: 'fur', password:bcrypt.hashSync("1234", 12)},
        {username: 'claw', password:bcrypt.hashSync("1234", 12)},
        {username: 'tail', password:bcrypt.hashSync("1234", 12)},
        {username: 'wetnose', password:bcrypt.hashSync("1234", 12)},
        {username: 'mutt', password:bcrypt.hashSync("1234", 12)},
        {username: 'poo', password:bcrypt.hashSync("1234", 12)}
      ]);
    });
};
