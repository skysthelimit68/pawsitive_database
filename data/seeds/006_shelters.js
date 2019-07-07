
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shelters').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('shelters').insert([
        {shelter: 'Little Shelter', isUpgraded: false},
        {shelter: 'Big Dog Rescue', isUpgraded: false},
        {shelter: 'We Heart Little Ones Rescue', isUpgraded: false},
        {shelter: 'Best Friends Rescue', isUpgraded: false},
        {shelter: 'Second Chance Rescue', isUpgraded: false},
        {shelter: 'Pooch & Meow Rescue', isUpgraded: false},
        {shelter: 'Pawsitively Purrfect Rescue', isUpgraded: false},
        {shelter: 'North Shore Animal Shelter', isUpgraded: false},
        {shelter: 'Pit Stop Bully Rescue', isUpgraded: false},
        {shelter: 'Purrington Rescue', isUpgraded: false},
      ]);
    });
};
