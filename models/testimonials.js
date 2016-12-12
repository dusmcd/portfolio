var mongoose = require("mongoose");

var testSchema = new mongoose.Schema({
    name: String,
    text: String
});

module.exports = mongoose.model("Testimonial", testSchema);
