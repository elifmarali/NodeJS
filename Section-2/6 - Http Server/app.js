var http = require("http");

function requestListener(request, response) {
    response.end()
};

var server = http.createServer(requestListener);

server.listen(3001);

console.log("Node.js Server at port 3001");
 