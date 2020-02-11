const db = require('../../data/dbConfig');
module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('classes');
}

function findById(id) {
    return db('classes')
    .where({ id })
    .first()
}

function add(role) {
    return db('classes')
        .insert(role, '*')
}

function update(id, changes) {
    return db('classes')
    .where({ id })
    .update(changes, '*')
}

function remove(id) {
    return db('classes')
    .where({ id })
    .del();
}