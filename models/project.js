var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  testimonials: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Testimonial"
  }]
});
module.exports = mongoose.model("Project", projectSchema);
