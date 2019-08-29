var express = require("express");
var app = express();
var port = 3000;
var friendsList = require("./data/friends.js");

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/htmlRoutes.js")(app);
require("./routing/apiRoutes.js")(app);

app.listen(port, function() {
  console.log("app is running on locahost port:", port);
});
