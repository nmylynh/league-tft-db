const router = require('express').Router();
const Items = require('./items-model');


module.exports = router;

router.get('/', get)
router.get('/:id', getById);
router.post('/', add);
router.post('/combos', addBuilds);
router.put('/:id', update);
router.delete('/:id', remove);


async function get(req, res) {
    try {
        const items = await Items.find();

        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to retrieve the Items database' });
    }
}

async function getById(req, res) {
    try {
        const { id } = req.params;
        const item = await Items.findById(id);

        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to retrieve the specified Item.' });
    }
}

async function add(req, res) {
    try {
        const newItem = await Items.add(req.body);

        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to add the Item.' });
    }
}

async function addBuilds(req, res) {
    try {
        const newItem = await Items.addCombos(req.body);

        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to add the Item.' });
    }
}

async function update(req, res) {
    try {
        const { id } = req.params;
        const success = await Items.update(id, req.body);

        success
            ? res.status(200).json({ message: 'successfully updated Item' })
            : res.status(404).json({ message: 'Item not found' })
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to update the Item.' });
    }
}

async function remove(req, res) {
    try {
        const { id } = req.params;
        const success = await Items.remove(id);

        success ?
            res.status(204).end() : res.status(404).end();
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to delete the Item.' });
    }
}

