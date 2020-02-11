const router = require('express').Router();
const Champions = require('./champions-model');


module.exports = router;

router.get('/', get)
router.get('/:id', getById);
router.post('/', add);
router.put('/:id', update);
router.delete('/:id', remove);


async function get(req, res) {
    try {
        const champs = await Champions.find();

        res.status(200).json(champs);
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to retrieve the Champions database' });
    }
}

async function getById(req, res) {
    try {
        const { id } = req.params;
        const champ = await Champions.findById(id);

        res.status(200).json(champ);
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to retrieve the specified Champion.' });
    }
}

async function add(req, res) {
    try {
        const newChampion = await Champions.add(req.body);

        res.status(201).json(newChampion);
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to add the Champion.' });
    }
}

async function update(req, res) {
    try {
        const { id } = req.params;
        const success = await Champions.update(id, req.body);

        success
            ? res.status(200).json({ message: 'successfully updated Champion' })
            : res.status(404).json({ message: 'Champion not found' })
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to update the Champion.' });
    }
}

async function remove(req, res) {
    try {
        const { id } = req.params;
        const success = await Champions.remove(id);

        success ?
            res.status(204).end() : res.status(404).end();
    } catch (err) {
        res.status(500).json({ success: false, err, msg: 'Failed to delete the Champion.' });
    }
}
