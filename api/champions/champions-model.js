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

function find() {
    let items = db('items');

    let newItemsArray = items.map(item => this.findById(item.id))

    return newItemsArray
}


function findById(id) {
    let items = db('items');

    if (id) {
        
        items.where({ id }).first();

        if(items.isBase) {
            const promises = [items, this.getItemPossibilties(id)];

            return Promise.all(promises).then(results => {
                let [ item, builds ] = results;

                if (item) {
                    item.builds = builds;

                    return item
                } else {
                    return null;
                }
            });
        } else {
            const promises = [items, this.getItemCombo(id)];

            return Promise.all(promises).then(results => {
                let [ item, combo ] = results;

                if (item) {
                    item.combo = combo;

                    return item
                } else {
                    return null;
                }
            });
        }
    }

    return items
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