const db = require('../../data/dbConfig');
module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('champions');
}

function findById(id) {
    return db('champions')
    .where({ id })
    .first()
}

function add(champion) {
    return db('champions')
        .insert(champion, '*')
}

function update(id, changes) {
    return db('champions')
    .where({ id })
    .update(changes, '*')
}

function remove(id) {
    return db('champions')
    .where({ id })
    .del();
}