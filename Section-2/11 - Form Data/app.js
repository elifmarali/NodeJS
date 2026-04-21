const http = require("http");
const routesHandler = require("./route");

const server = http.createServer(routesHandler);

server.listen(3000);
