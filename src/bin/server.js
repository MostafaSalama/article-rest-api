const app = require('../app');
const http = require('http');

// app server
const server = http.createServer(app);

// server port
const port = process.env.PORT || 3000;

server.listen(port, () => {
	console.log(`app is running at port ${port}`);
});
