var express = require("express");
var app = express();
// var mongoose = require("mongoose");
var bodyParser = require("body-parser");
// var Gallery = require("./models/gallery.js");
// mongoose.connect("mongodb://localhost/carrPedia", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
var db = require("./models/index.js") 

//==============API end points============//
//...............gallery.......................//
app.get("/api/images", function(req,res){
    db.Gallery.find()
    .then(function(image){
        res.json(image);
    })
    .catch(function(err){
        res.send(err);
    })
});
app.post("/api/images", function(req,res){
    db.Gallery.create(req.body)
    .then(function(newEntry){
        res.json(newEntry);
    })
    .catch(function(err){
        res.send(err);
    })
});
app.get("/api/images/:imageId", function(req,res){
    db.Gallery.findById(req.params.imageId)
    .then(function(img){
        res.json(img);
    })
    .catch(function(err){
        res.send(err);
    })
});
app.delete("/api/images/:imageId", function(req,res){
    db.Gallery.findByIdAndRemove(req.params.imageId)
    .then(function(){
        res.json({message: "deleted"});
    })
    .catch(function(err){
        res.send(err);
    })
});
//..................suggestions...........................//
app.get("/api/suggestions", function(req,res){
    db.Suggest.find()
    .then(function(text){
        res.json(text)
    })
    .catch(function(err){
        res.send(err)
    })
});

app.post("/api/suggestions", function(req,res){
    db.Suggest.create(req.body)
    .then(function(newOpinion){
        res.json(newOpinion);
    })
    .catch(function(err){
        res.send(err);
    })

});
app.get("/api/suggestions/:opinionId", function(req,res){
    db.Suggest.findById(req.params.opinionId)
    .then(function(entry){
        res.json(entry);
    })
    .catch(function(err){
        res.send(err);
    })
});
app.delete("/api/suggestions/:opinionId", function(req,res){
    db.Suggest.findByIdAndRemove(req.params.opinionId)
    .then(function(){
        res.json({message: "deleted opinion"});
    })
    .catch(function(err){
        res.send(err);
    })
});
//============================================================//

app.get("/", function(req,res){
    res.render("home.ejs");
});

//==========ferrari routes===============//
app.get("/ferrari", function(req,res){
    res.render("ferrari.ejs");
});

app.get("/gallery", function(req,res){
    res.sendFile("gallery.html", { root : __dirname + "/views"});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("carPedia Started!!")
})