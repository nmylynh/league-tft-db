const { onUpdateTrigger } = require('../../knexfile')

exports.up = knex =>
  knex.schema.createTable('item_combos', tbl => {
    tbl.increments();
    tbl.timestamps(true, true);

    tbl
        .integer("item_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("items")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    tbl
        .integer("base1_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("items")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    tbl
        .integer("base2_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("items")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
  })
    .then(() => knex.raw(onUpdateTrigger('item_combos')))

exports.down = knex => knex.schema.dropTable('item_combos')
