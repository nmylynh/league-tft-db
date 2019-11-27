const express = require('express');
const server = express();
const configMiddleware = require('./middleware.js');
const itemsRouter = require('./api/itemsRouter');
const champsRouter = require('./api/champsRouter');
const originsRouter = require('./api/originsRouter');
const classesRouter = require('./api/classesRouter');

configMiddleware(server);

server.use('/api/items', itemsRouter);
server.use('/api/champions', champsRouter);
server.use('/api/origins', originsRouter);
server.use('/api/classes', classesRouter);

server.get('/', (req, res) => {
res.send(`<h2>League of Legends TFT API</h2>`)
});


module.exports = server;