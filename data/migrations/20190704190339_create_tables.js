
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('animal_status', tbl => {
        tbl.increments();
        tbl.string('status', 256)
            .notNullable()
            .unique();
    })
    .createTable('species', tbl => {
        tbl.increments();
        tbl.string('species', 256)
            .notNullable()
            .unique();
    })
    .createTable('application_status', tbl => {
        tbl.increments();
        tbl.string('status', 256)
            .notNullable()
            .unique();
    })
    .createTable('pictures', tbl => {
        tbl.increments();
        tbl.string('img_url', 512)
            .notNullable()
            .unique();
        tbl.integer('animal_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("animals")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
    })
    .createTable('animal_followers', tbl => {
        tbl.integer('animal_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("animals")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.integer('user_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("users")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
    })
    .createTable('animals', tbl => {
        tbl.increments();
        tbl.string('name', 256)
            .notNullable();
        tbl.integer('species_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("species")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.boolean('isMale')
            .notNullable();
        tbl.integer('shelter_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("shelters")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");    
        tbl.integer('animal_status_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("animal_status")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.integer('shelter_location_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("shelter_locations")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
    })
    .createTable('sexes', tbl => {  //orphan table
        tbl.increments();
        tbl.string('sex', 128)
            .notNullable()
            .unique()
    })    
    .createTable('applications', tbl => {
        tbl.increments();
        tbl.integer('animal_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("animals")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.integer('shelter_id')
            .notNullable()             
            .unsigned()
            .references("id")
            .inTable("shelters")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.integer('user_id')
            .notNullable()             
            .unsigned()
            .references("id")
            .inTable("users")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.integer('application_status_id')
            .notNullable()             
            .unsigned()
            .references("id")
            .inTable("application_status")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
    })
    .createTable('users', tbl => {
        tbl.increments();
        tbl.string('username', 256)
            .notNullable()
            .unique();
        tbl.string('password', 256)
            .notNullable();
    })
    .createTable('donations', tbl => {
        tbl.increments();
        tbl.integer('user_id')
            .notNullable()             
            .unsigned()
            .references("id")
            .inTable("users")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.integer('shelter_id')
            .notNullable()             
            .unsigned()
            .references("id")
            .inTable("shelters")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.decimal('amount')
            .notNullable()
            .unsigned()
    })
    .createTable('shelter_followers', tbl => {
        tbl.integer('shelter_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("shelters")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.integer('user_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("users")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
    })
    .createTable('animal_admin', tbl => {
        tbl.increments();
        tbl.string('note', 1024)
            .notNullable();
        tbl.integer('shelter_user_id') //might need to change to shelter_id if shelter users are not utilized
            .notNullable()             // or totally remove this column
            .unsigned()
            .references("id")
            .inTable("shelter_users")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.integer('animal_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("animals")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
    })
    .createTable('application_admin', tbl => {
        tbl.increments();
        tbl.string('note', 1024)
            .notNullable();
        tbl.integer('shelter_user_id') //might need to change to shelter_id if shelter users are not utilized
            .notNullable()             // or totally remove this column
            .unsigned()
            .references("id")
            .inTable("shelter_users")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.integer('application_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("applications")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
    })
    .createTable('shelters', tbl => {
        tbl.increments();
        tbl.string('shelter', 512)
            .notNullable()
        tbl.boolean('isUpgraded').defaultTo(false)
    })
    .createTable('shelter_subscriptions', tbl => {
        tbl.increments();
        tbl.integer('shelter_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("shelters")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.integer('subscription_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("subscriptions")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.timestamps();
        tbl.date('expiration_date')
            .notNullable();
    })
    .createTable('roles', tbl => {
        tbl.increments();
        tbl.string('role', 256)
            .notNullable()
            .unique();
    })
    .createTable('shelter_users', tbl => {
        tbl.increments();
        tbl.string('username', 256)
            .notNullable()
            .unique();
        tbl.string('password', 256)
            .notNullable();
        tbl.integer('role_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("roles")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
        tbl.integer('shelter_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("shelters")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
    })
    .createTable('shelter_locations', tbl => {
        tbl.increments();
        tbl.string('street_address', 512)
        tbl.string('city', 256)
            .notNullable();
        tbl.string('state', 128)  // will need to create another table for list of state to keep it uniform
            .notNullable();
        tbl.string('zip_code', 128)
            .notNullable();
        tbl.string('phone', 128),
        tbl.integer('shelter_id')
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("shelters")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE");
    })
    .createTable('subscriptions', tbl => {
        tbl.increments();
        tbl.string('subscription', 256)
            .notNullable()
            .unique();
        tbl.integer('subscription_duration_mo')
            .notNullable();
        tbl.decimal('price')
            .notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema   
    .dropTableIfExists('animal_status')
    .dropTableIfExists('species')
    .dropTableIfExists('application_status')
    .dropTableIfExists('pictures')
    .dropTableIfExists('animal_followers')
    .dropTableIfExists('animals')
    .dropTableIfExists('sexes')
    .dropTableIfExists('applications')
    .dropTableIfExists('users')
    .dropTableIfExists('donations')
    .dropTableIfExists('shelter_followers')
    .dropTableIfExists('animal_admin')
    .dropTableIfExists('application_admin')
    .dropTableIfExists('shelter')
    .dropTableIfExists('shelter_subscriptions')
    .dropTableIfExists('roles')
    .dropTableIfExists('shelter_users')
    .dropTableIfExists('shelter_locations')
    .dropTableIfExists('subscriptions')
};
