var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", function(req,res){
    res.render("home.ejs");
});

app.get("/ferrari", function(req,res){
    res.render("ferrari.ejs");
});

app.listen(3000, function(){
    console.log("carPedia Started!!")
})