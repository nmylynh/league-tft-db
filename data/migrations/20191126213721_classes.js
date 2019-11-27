const { onUpdateTrigger } = require('../../knexfile')

exports.up = knex =>
    knex.schema.createTable('classes', tbl => {
    tbl.increments();
    tbl.timestamps(true, true);

    tbl
        .string("class", 128)
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
    .then(() => knex.raw(onUpdateTrigger('classes')))

exports.down = knex => knex.schema.dropTable('classes')

