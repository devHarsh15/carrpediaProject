var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/carrPedia", { useNewUrlParser: true, useUnifiedTopology: true });

var suggestSchema = new mongoose.Schema({
    opinion: String,
});

var Suggest = mongoose.model("Suggest", suggestSchema);
module.exports = Suggest;