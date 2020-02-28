const express = require('express');
const dotenv = require('dotenv');
dotenv.config() ;
const app = express();

// handle simple config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// handle routes

// export the app
module.exports = app;