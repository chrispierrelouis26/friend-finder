// Setting up Dependencies

var express = require("express");
var path = require("path");
var router=express.Router();
// Sets up the Express App

var app = express();



// My Routes


// Basic route that sends the user first to the AJAX Page
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});


module.exports= router;
