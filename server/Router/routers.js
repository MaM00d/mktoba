//const{db} = require('../services/dbrequests');
const express = require('express');
const app = express.Router();

const homerout = require("./Routs/home");
app.use('/',homerout);

const loginrout = require("./Routs/login");
app.use('/login',loginrout);

const registerrout = require("./Routs/Register");
app.use('/register',registerrout);

const mybooksrout = require("./Routs/mybooks");
app.use('/mybooks',mybooksrout);


const profilerout = require("./Routs/profile");
app.use('/profile',profilerout);

const bookrout = require("./Routs/book");
app.use('/book',bookrout);

module.exports = app;