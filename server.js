const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');


const middleware = jsonServer.defaults({
    static: './build'
});

const PORT = proces.env.PORT || 8000
server.use(middleware)

server.use(jsonServer.rewriter({
    '/api/*':'/$1',
}))

server.use(router);
server.listen(PORT, () => {
    console.log('Server is running')
})

