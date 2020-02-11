const router = require('express').Router();
const Classes = require('./classes-model');


module.exports = router;

router.get('/', get)
router.get('/:id', getById);
router.post('/', add);
router.put('/:id', update);
router.delete('/:id', remove);


async function get(req, res) {
    try {
        const Classes = await Classes.find();

        res.status(200).json(Classes);
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to retrieve the Classes database' });
    }
}

async function getById(req, res) {
    try {
        const { id } = req.params;
        const role = await Classes.findById(id);

        res.status(200).json(role);
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to retrieve the specified Class.' });
    }
}

async function add(req, res) {
    try {
        const newClass = await Classes.add(req.body);

        res.status(201).json(newClass);
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to add the Class.' });
    }
}

async function update(req, res) {
    try {
        const { id } = req.params;
        const success = await Classes.update(id, req.body);

        success
            ? res.status(200).json({ message: 'successfully updated Class' })
            : res.status(404).json({ message: 'Class not found' })
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to update the Class.' });
    }
}

async function remove(req, res) {
    try {
        const { id } = req.params;
        const success = await Classes.remove(id);

        success ?
            res.status(204).end() : res.status(404).end();
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to delete the Class.' });
    }
}
