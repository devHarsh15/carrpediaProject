var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb+srv://harsh:harshgupta@carrpedia-ydf4f.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = Promise;

module.exports.Gallery = require("./gallery.js")
module.exports.Suggest = require("./suggest.js")