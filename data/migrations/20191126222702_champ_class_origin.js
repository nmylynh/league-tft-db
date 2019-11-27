const { onUpdateTrigger } = require('../../knexfile')

exports.up = knex =>
  knex.schema.createTable('champ_class_origin', tbl => {
    tbl.increments();
    tbl.timestamps(true, true);

    tbl
        .integer("champ_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("champions")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    tbl
        .integer("origin_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("origins")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    tbl
        .integer("class_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("classes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
  })
    .then(() => knex.raw(onUpdateTrigger('champ_class_origin')))

exports.down = knex => knex.schema.dropTable('champ_class_origin')
