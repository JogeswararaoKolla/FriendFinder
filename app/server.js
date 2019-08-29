var express = require("express");
var app = express();
var port = 3000;
var friendsList = require("./data/friends.js");

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/htmlRoutes.js")(app);

app.get("/api/friendslist/", function(req, res) {
  res.json(friendsList);
});

//Here : is used to reference it is coming from URL as request parameter
app.get("/api/friendslist/:search", function(req, res) {
  var searchFriend = req.params.search;
  var searchResults = friendsList.filter((value, index, arr) => {
    return value.name.toLowerCase() == searchFriend.toLowerCase();
  });
  if (searchResults.length) {
    res.json(searchResults);
  } else {
    res.json(`No data found for the ${searchFriend}`);
  }
});

app.post("/api/friendslist/", function(req, res) {
  console.log("Look here!", req.body);
  var newFriend = req.body;
  friendsList.push(newFriend);
  res.json(newFriend);
});

app.listen(port, function() {
  console.log("app is running on locahost port:", port);
});
