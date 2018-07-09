//opened tobacco table
exports.up = function(knex, Promise) {
  return knex.schema.createTable('opened', function(table) {
    table.increments();
    table.string('image');
    table.string('brand');
    table.string('blend');
    table.integer('weight');
    table.date('purchased');
    table.string('age');
    table.integer('price');
    table.boolean('isAvailable').notNullable().defaultTo(false);
    table.string('source');
    table.float('rating', 2, 1);

  });
};




exports.down = function(knex, Promise) {
  return knex.schema.dropTable('opened');
};
