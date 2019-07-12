const bcrypt = require('bcryptjs');

exports.seed = async function(knex, Promise) {
  await knex('shelter_users').del()
  await knex.raw('ALTER SEQUENCE shelter_users_id_seq RESTART WITH 1')  
  // Deletes ALL existing entries
    .then(function () {
      // Inserts seed entries
      return knex('shelter_users').insert([
        {username: 'lennaMau', password:bcrypt.hashSync("1234", 12), role_id: 1, shelter_id:1},
        {username: 'mingLiu', password:bcrypt.hashSync("1234", 12), role_id: 1, shelter_id:2},
        {username: 'hungPham', password:bcrypt.hashSync("1234", 12), role_id: 1, shelter_id:3},
        {username: 'arunaBenjamin', password:bcrypt.hashSync("1234", 12), role_id: 1, shelter_id:4},
        {username: 'sarahLee', password:bcrypt.hashSync("1234", 12), role_id: 1, shelter_id:5},
        {username: 'jamesPak', password:bcrypt.hashSync("1234", 12), role_id: 1, shelter_id:6},
        {username: 'chrisRiffle', password:bcrypt.hashSync("1234", 12), role_id: 1, shelter_id:7},
        {username: 'somePerson', password:bcrypt.hashSync("1234", 12), role_id: 1, shelter_id:8},
        {username: 'anotherPerson', password:bcrypt.hashSync("1234", 12), role_id: 1, shelter_id:9},
        {username: 'randomPerson', password:bcrypt.hashSync("1234", 12), role_id: 1, shelter_id:10}
      ]);
    });
};
