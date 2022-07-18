const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = ["Task 1", "Task 2", "Task 3"];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,resp){
  var day;
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-US", options);
  resp.render("list",{day: day, newItem: items });

});

app.post("/", function(req, resp){
  var item = req.body.new;
  items.push(item);
  resp.redirect("/");
});

app.listen(3000, function(){
  console.log("Server running on port 3000");
});
