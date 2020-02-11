const router = require('express').Router();
const Origins = require('./origins-model');


module.exports = router;

router.get('/', get)
router.get('/:id', getById);
router.post('/', add);
router.put('/:id', update);
router.delete('/:id', remove);


async function get(req, res) {
    try {
        const origins = await Origins.find();

        res.status(200).json(origins);
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to retrieve the Origins database' });
    }
}

async function getById(req, res) {
    try {
        const { id } = req.params;
        const origin = await Origins.findById(id);

        res.status(200).json(origin);
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to retrieve the specified Origin.' });
    }
}

async function add(req, res) {
    try {
        const newOrigin = await Origins.add(req.body);

        res.status(201).json(newOrigin);
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to add the Origin.' });
    }
}

async function update(req, res) {
    try {
        const { id } = req.params;
        const success = await Origins.update(id, req.body);

        success
            ? res.status(200).json({ message: 'successfully updated Origin' })
            : res.status(404).json({ message: 'Origin not found' })
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to update the Origin.' });
    }
}

async function remove(req, res) {
    try {
        const { id } = req.params;
        const success = await Origins.remove(id);

        success ?
            res.status(204).end() : res.status(404).end();
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to delete the Origin.' });
    }
}
