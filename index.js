const jsonServer = requirel("json-server"); // importing json-server
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.port || 8080; // chose port from here like;

server.use(middlewares);
server.use(router);

server.listen(port);
