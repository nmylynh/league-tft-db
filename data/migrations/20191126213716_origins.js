const { onUpdateTrigger } = require('../../knexfile')

exports.up = knex =>
    knex.schema.createTable('origins', tbl => {
    tbl.increments();
    tbl.timestamps(true, true);

    tbl
        .string("origin", 128)
        .notNullable()
        .unique()
    tbl
        .text("bonus")
        .notNullable()
    tbl
        .string("tier", 1)
    tbl
        .string("img", 128)
    })
    .then(() => knex.raw(onUpdateTrigger('origins')))

exports.down = knex => knex.schema.dropTable('origins')

