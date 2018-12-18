var express = require("express");
var app = express();
var path = require("path");
var PORT = 1490;


var routes = require("./app/routing/htmlRoutes.js");
var api = require("./app/routing/apiRoutes.js");

app.use(express.static(path.join(__dirname, 'static')));

app.use("/", routes);
app.use("/api", api);



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
