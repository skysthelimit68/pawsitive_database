const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
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
