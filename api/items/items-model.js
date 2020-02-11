const db = require('../../data/dbConfig');
module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('items');
}

function findById(id) {
    return db('items')
    .where({ id })
    .first()
}

function add(item) {
    return db('items')
        .insert(item, '*')
}

function update(id, changes) {
    return db('items')
    .where({ id })
    .update(changes, '*')
}

function remove(id) {
    return db('items')
    .where({ id })
    .del();
}