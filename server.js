// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//external file routes 
// =============================================================
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");
var friends = require("./app/data/friends.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
// =============================================================


  