var path = require("path");
var express = require("express");

var PORT = 3040;


var app = express();


app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });