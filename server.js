const express = require('express');
const server = express();
const configMiddleware = require('./middleware.js');
const itemsRouter = require('./api/items/items-router');
const champsRouter = require('./api/champions/champions-router');
const originsRouter = require('./api/origins/origins-router');
const classesRouter = require('./api/classes/classes-router');

configMiddleware(server);

server.use('/api/items', itemsRouter);
server.use('/api/champions', champsRouter);
server.use('/api/origins', originsRouter);
server.use('/api/classes', classesRouter);

server.get('/', (req, res) => {
res.send(`<h2>League of Legends TFT API</h2>`)
});


module.exports = server;