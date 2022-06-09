const jsonServer = require('json-server');
const path = require('path');

const express = require('express');
const app = express();
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();



const PORT = process.env.PORT || 8000
// server.use(middlewares)

// server.use(jsonServer.rewriter({
//     '/api/*':'/$1',
// }))

// server.use(router);
app.use('./db.json', middlewares, router);
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
server.listen(PORT, () => {
    console.log('Server is running')
})



