

const http = require('http');
const port = 3456;
const nodeServer = require('./module/nodeServer')

const server = http.createServer( (req, res) => {
	nodeServer.responder(req, res);
});

server.listen(port, () => {
	console.log('Server run in port: ' + port);
});

