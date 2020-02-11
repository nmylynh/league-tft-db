const db = require("../../data/dbConfig");
module.exports = {
  find,
  findById,
  add,
  addCombos,
  update,
  remove,
  getItemPossibilties,
  getItemCombo
};

function find() {
  let items = db("items");

  let newItemsArray = items.map(item => this.findById(item.id));

  return newItemsArray;
}

function findById(id) {
  let items = db("items");

  if (id) {
    items.where({ id }).first();
    const promises = [
      items,
      this.getItemPossibilties(id),
      this.getItemCombo(id)
    ];

    return Promise.all(promises).then(results => {
      let [item, combos, built_with] = results;

      if (item && item.isBase) {
        item.combos = combos.map(combo => combo.name);
        return item;
      } else if (item && item.isBase === false) {
        item.built_with = built_with[0];
        return item;
      } else {
        return null;
      }
    });
  }

  return items;
}

function add(item) {
  return db("items").insert(item, "*");
}

function addCombos(item) {
  return db("item_combos").insert(item, "*");
}

function update(id, changes) {
  return db("items")
    .where({ id })
    .update(changes, "*");
}

function remove(id) {
  return db("items")
    .where({ id })
    .del();
}

function getItemPossibilties(id) {
  let query = db("item_combos as ic")
    .where("base1_id", id)
    .andWhere("base2_id", id)
    .orWhere("base1_id", id)
    .orWhere("base2_id", id)
    .join('items', 'ic.item_id', 'items.id')
    .select('items.name')

  return query;
}

function getItemCombo(id) {
  let query = db("item_combos as ic")
    .where("item_id", id)
    .join("items as i1", "ic.base1_id", "i1.id")
    .join("items as i2", "ic.base2_id", "i2.id")
    .select("i1.name as item_1", "i2.name as item_2");

  return query;
}
