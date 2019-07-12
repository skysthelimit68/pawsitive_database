
exports.seed = async function(knex, Promise) {
  await knex('shelter_locations').del()
  await knex.raw('ALTER SEQUENCE shelter_locations_id_seq RESTART WITH 1')  
  // Deletes ALL existing entries
    .then(function () {
      // Inserts seed entries
      return knex('shelter_locations').insert([
        {location: 'main', street_address: '123 Main Street', city: 'New York', state: 'NY', zip_code: '10021', phone: '212-552-1234', shelter_id: 1},
        {location: 'main', street_address: '123 Main Street', city: 'Los Angeles', state: 'CA', zip_code: '90005', phone: '213-552-1234', shelter_id: 2},
        {location: 'main', street_address: '123 Main Street', city: 'Raleigh', state: 'NC', zip_code: '27513', phone: '919-552-1234', shelter_id: 3},
        {location: 'main', street_address: '123 Main Street', city: 'Mystic', state: 'CT', zip_code: '06355', phone: '860-552-1234', shelter_id: 4},
        {location: 'main', street_address: '123 Main Street', city: 'Orlando', state: 'FL', zip_code: '32789', phone: '407-552-1234', shelter_id: 5},
        {location: 'main', street_address: '123 Main Street', city: 'Seattle', state: 'WA', zip_code: '98101', phone: '206-552-1234', shelter_id: 6},
        {location: 'main', street_address: '123 Main Street', city: 'Austin', state: 'TX', zip_code: '73301', phone: '512-552-1234', shelter_id: 7},
        {location: 'main', street_address: '123 Main Street', city: 'Edgewater', state: 'NJ', zip_code: '07020', phone: '201-552-1234', shelter_id: 8},
        {location: 'main', street_address: '123 Main Street', city: 'Scottsdale', state: 'AZ', zip_code: '85054', phone: '480-552-1234', shelter_id: 9},
        {location: 'main', street_address: '123 Main Street', city: 'Cleveland', state: 'OH', zip_code: '44101', phone: '216-552-1234', shelter_id: 10},
        {location: 'North East', street_address: '123 Main Street', city: 'Raleigh', state: 'NC', zip_code: '27626', phone: '919-552-1234', shelter_id: 3},
        {location: 'Cherry Hill', street_address: '123 Main Street', city: 'Cherry Hill', state: 'NJ', zip_code: '08002', phone: '201-552-1234', shelter_id: 8},
      ]);
    });
};
