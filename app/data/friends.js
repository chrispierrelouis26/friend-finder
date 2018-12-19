var express = require("express");
var path = require("path");


// for loop going through friends list
//inner for loop gets score from current friend 




var friends = [
    {
       name: "Ahmed",
       photo: "https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"

        ]
    },
    {
       name: "Jason",
       photo: "https://clkde.tradedoubler.com/click?p=264311&a=3045532&g=24328740&url=https://stock.adobe.com/images/horror-brutal-jason-mask-man-strong-bodybuilder-athletic-fitness-man-in-scary-hockey-mask-in-the-gym/187097320?as_channel=affiliate&as_campaign=pexels&as_source=arvato",
        scores:[
            "4",
            "3",
            "2",
            "2",
            "5",
            "4",
            "5",
            "1",
            "2",
            "5",

        ]
       




    },
    {
       name: "Becca",
       photo: "https://www.pexels.com/photo/selective-focus-photography-of-woman-sitting-on-green-grass-1580271/",
        scores:[
            "4",
            "3",
            "2",
            "2",
            "5",
            "4",
            "5",
            "1",
            "2",
            "5",

        ]
    },
    {
       name: "Muhammed",
       photo: "https://www.pexels.com/photo/man-in-blue-sports-shirt-wearing-eyeglasses-899357/",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"

        ]
    },
    {
       name: "Shana",
       photo: "https://www.pexels.com/photo/closeup-photography-of-woman-wearing-white-spaghetti-strap-top-1343258/",
        scores:[
            "4",
            "3",
            "2",
            "2",
            "5",
            "4",
            "5",
            "1",
            "2",
            "5",

        ]
    },
    {
       name: "Susana",
       photo: "https://www.pexels.com/photo/woman-sitting-on-black-chair-1433495/",
        scores:[
            "4",
            "3",
            "2",
            "1",
            "3",
            "5",
            "5",
            "5",
            "5",
            "5",

        ]
    },
    {
       name: "David",
       photo:" https://as2.ftcdn.net/jpg/01/87/09/73/500_F_187097320_W3a3PAYtyc3QxZUOjKRlC3zUYfY0XN6u.jpg",
        scores:[
            "5",
            "4",
            "1",
            "2",
            "1",
            "1",
            "3",
            "1",
            "2",
            "1",

        ]
    },
    {
       name: "Angela",
       photo: "https://images.pexels.com/photos/209895/pexels-photo-209895.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        scores:[
            "1",
            "5",
            "1",
            "2",
            "2",
            "3",
            "5",
            "1",
            "3",
            "4",

        ]
    }
]


//exporting array of objects friends 
module.exports = friends;

