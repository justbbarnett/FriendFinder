// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var friendsData = require("./app/data/friends.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;//external file routes 



// =============================================================
// var htmlRoutes = 



// // Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, "/app/public")));

// // Routes
// // =============================================================
// app.use("/", htmlRoutes);
// app.use('/survey', htmlRoutes);

  
// // Starts the server to begin listening
// // =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  