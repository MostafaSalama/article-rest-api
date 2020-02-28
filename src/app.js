const express = require('express');
const articleRoutes = require('./routes/article');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

// handle simple config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// handle routes
app.use('/articles', articleRoutes);
// export the app
module.exports = app;