var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/carrPedia", { useNewUrlParser: true, useUnifiedTopology: true });

var gallerySchema = new mongoose.Schema({
    image: String,
});

var Gallery = mongoose.model("Gallery", gallerySchema);
module.exports = Gallery;