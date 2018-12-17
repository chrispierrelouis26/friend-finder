// Setting up Dependencies

var express = require("express");
var path = require("path");

// Sets up the Express App

var app = express();
var PORT = 1450;


// My Routes


// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  
  