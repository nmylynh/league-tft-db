const db = require('../../data/dbConfig');
module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    getClass,
    getOrigin
}


function find() {
    let champions = db('champions');

    let newChampionsArray = champions.map(champ => this.findById(champ.id))

    return newChampionsArray
}


function findById(id) {
    let champions = db('champions');

    if (id) {
        
        champions.where({ id }).first();

        const promises = [champions, this.getClass(id), this.getOrigin(id)];

        return Promise.all(promises).then(results => {
            let [ champion, classes, origin ] = results;

            if (champion) {
                champion.classes = classes;
                champion.origin = origin;

                return champion
            } else {
                return null;
            }
        })
    }

    return champions
}


function getClass(id) {
    let query = db('champ_class_origin as cco')
        .where('champ_id', id)
        .join('origins', 'cco.origin_id', 'origins.id')
        .select('*').from('origins')

    return query
}

function getOrigin(id) {
    let query = db('champ_class_origin as cco')
        .where('champ_id', id)
        .join('classes', 'cco.class_id', 'classes.id')
        .select('*').from('classes')

    return query
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