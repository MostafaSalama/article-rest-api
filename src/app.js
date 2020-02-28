const express = require('express');

const app = express();

// handle simple config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// handle routes

// export the app
module.exports = app; 