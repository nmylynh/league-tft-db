const db = require('../../data/dbConfig');
module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    getItemPossibilties,
    getItemCombo
}

function find() {
    let items = db('items');

    let newItemsArray = items.map(item => {

        return this.findById(item.id)
    })

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


function getItemPossibilties(id) {
    let query = db('item_combos')
        .where('base1_id', id)
        .orWhere('base2_id', id)
           
    return query
}

function getItemCombo(id) {
    let query = db('item_combos')
        .where('item_id', id)
           
    return query
}