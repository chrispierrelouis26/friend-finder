// getting the array of info from friends
var express = require("express");
var friends = require("../data/friends");
var router = express.Router();
var path = require("path");

router.use(express.urlencoded({
    extended: true
}));

//   // Data (api) routes
//   router.get("/friends", function (req, res) {
//     res.json(friends);
//   });

//   router.post("/friends", function (req, res) {
//     var newCharacter = req.body;
//     console.log(friends);
//     friendArray.push(friends);
//     res.json(friends);


//   });

//Linking routes to a specific data source//
var friends = require("../data/friends");
var friendArray = [];

//Routing//

// module.exports = function (app) {

router.get("/friends", function (req, res) {
    res.json(friends);

});

router.post("/friends", function (req, res) {
    // console.log(req.body.scores);
    var scoreArr = [];
    var newUser = req.body;
    console.log(req.body.scores);
    console.log(newUser); //New user appended to list
    var newScoreTotal = newUser.scores.reduce(function (a, b) { return a + b; }, 0);
    console.log(newScoreTotal);

    for (var i = 0; i < friends.length; i++) {
        // console.log("score total",scoreTotal);
        // console.log(friends[i]); // a friend from the list
        var scoreTotal = friends[i].scores.reduce(function (a, b) { return parseInt(a) + parseInt(b); }, 0);
        //creates array of friendlist score totals//
        scoreArr.push(scoreTotal);
    };



    var yourScore = 0;

    for (var i = 0; i < req.body.scores.length; i++) {

        yourScore += parseInt(req.body.scores[i]);
    }
    console.log(yourScore);

    var smallestDiff = {
        index: 0,
        diff: yourScore,
    }

    for (var i = 0; i < scoreArr.length; i++) {

        if (scoreArr[i] <= smallestDiff.diff) {
            smallestDiff.index = i;

            smallestDiff.diff = scoreArr[i]
            // smallestDiff = {
            //     index: i,
            //     diff: scoreArr[i]
            // };

        };
    };
    res.send(friends[smallestDiff.index]);
    console.log(friends[smallestDiff.index]);
    console.log(smallestDiff.index);
});


module.exports = router;

