// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//external file routes 
// =============================================================
var htmlRoutes = require("./app/routing/html-routes.js");
var apiRoutes = require("./app/routing/api-routes.js");
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

// Basic route that sends the user first to the AJAX Page
app.get("/app/public/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  