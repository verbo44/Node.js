const fs = require('fs');
const path = require('path');

const myMessage = 'Hello, Node JS server!';

const myResponder = (req, res) => {
	let filePath = path.join(__dirname, '..', 'public/index.html');
	console.log(filePath);
	fs.readFile(filePath, (err, data) => {
		if (err) {
				console.log(err);
				res.end('Someting went wrong...');
				return;
		}
			res.end(data);
	});
};

module.exports = {
	responder: myResponder,
	message: myMessage
};