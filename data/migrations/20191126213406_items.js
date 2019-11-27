const { onUpdateTrigger } = require('../../knexfile')

exports.up = knex =>
    knex.schema.createTable('items', tbl => {
    tbl.increments();
    tbl.timestamps(true, true);

    tbl
        .string("name", 128)
        .notNullable()
        .unique()
    tbl
        .text("bonus")
        .notNullable()
    tbl
        .boolean("isBase")
        .notNullable()
    tbl
        .string("img", 128)
    })
    .then(() => knex.raw(onUpdateTrigger('items')))

exports.down = knex => knex.schema.dropTable('items')

