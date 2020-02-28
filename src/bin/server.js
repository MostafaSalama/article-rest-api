const app = require('../app');
const http = require('http');
const mongoose = require('mongoose');

const DB_LOCAL_URL = 'mongodb://localhost:27017/blog';
// app server
mongoose
	.connect(process.env.DATABASE_URL || DB_LOCAL_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('connected to db');
	})
	.catch(err => {
		console.error(err);
	});
const server = http.createServer(app);

// server port
const port = process.env.PORT || 3000;

server.listen(port, () => {
	console.log(`app is running at port ${port}`);
});
