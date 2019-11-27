const { onUpdateTrigger } = require('../../knexfile')

exports.up = knex =>
    knex.schema.createTable('champions', tbl => {
    tbl.increments();
    tbl.timestamps(true, true);

    tbl
        .string("name", 128)
        .notNullable()
        .unique()
    tbl
        .text("ability")
        .notNullable()
    tbl
        .string("tier", 1)
    tbl
        .string("img", 128)
    })
    .then(() => knex.raw(onUpdateTrigger('champions')))

exports.down = knex => knex.schema.dropTable('champions')

