// migrations/timestamp_create_token.js

exports.up = function (knex) {
  return knex.schema.createTable('token', function (table) {
    table.uuid('id').primary().notNullable();
    table.string('token').notNullable().unique();
    table.uuid('user_id').notNullable();
    table.string('type').notNullable();
    table.date('expires').notNullable();
    table.boolean('blacklisted').defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('token');
};
