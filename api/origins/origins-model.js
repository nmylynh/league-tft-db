const db = require('../../data/dbConfig');
module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('origins');
}

function findById(id) {
    return db('origins')
    .where({ id })
    .first()
}

function add(origin) {
    return db('origins')
        .insert(origin, '*')
}

function update(id, changes) {
    return db('origins')
    .where({ id })
    .update(changes, '*')
}

function remove(id) {
    return db('origins')
    .where({ id })
    .del();
}