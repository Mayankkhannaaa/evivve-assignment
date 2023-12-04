// migrations/timestamp_create_tasks.js

exports.up = function (knex) {
  return knex.schema.createTable('tasks', function (table) {
    table.uuid('id').primary().notNullable();
    table.string('description').notNullable();
    table.enum('status', ['pending', 'completed', 'in_progress']).notNullable(); // Define your status options
    table.string('user_id').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('tasks');
};
