// getting the array of info from friends
var friendArray = require("../data/friends");


var path = require("path");




module.exports = function (app) {
  // Data (api) routes
  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function (req, res) {
    var newCharacter = req.body;
    console.log(newCharacter);
    friendArray.push(newCharacter);
    res.json(newCharacter);
  });
}