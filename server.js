var express = require("express");
var app = express();

var PORT = 1490;


var routes = require("./app/routing/htmlRoutes.js");
var api = require("./app/routing/apiRoutes.js");



app.use("/", routes);
app.use("/api", api);



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
