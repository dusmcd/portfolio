var Project = require("./models/project");
var Testimonial = require("./models/testimonials");
var mongoose = require("mongoose");

var data = [
  {
    title: "Project A",
    image: "https://static.pexels.com/photos/2324/skyline-buildings-new-york-skyscrapers.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis ornare" +
    "accumsan. Aenean ut blandit dui, lacinia efficitur nisi. Fusce dignissim egestas enim, nec" +
    "faucibus lorem feugiat nec. Nullam interdum, purus non vehicula accumsan, dui est porta lorem," +
    "ut laoreet nisl arcu sit amet lacus. Integer nec odio a mauris malesuada consectetur. In pulvinar" +
    "blandit leo sed hendrerit. Nunc commodo, enim eu vestibulum vulputate, neque tortor pharetra felis," +
    "id bibendum est est eget libero. Donec sit amet eleifend purus. Fusce condimentum lectus sed finibus auctor." +
    "Nulla rutrum at libero in facilisis. Sed dapibus tempor nisi, a egestas massa convallis non. Quisque imperdiet"+
    "sem lacinia interdum feugiat. Aliquam pharetra interdum varius."
  },
  {
    title: "Project B",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/New_York_City_skyline.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis ornare" +
    "accumsan. Aenean ut blandit dui, lacinia efficitur nisi. Fusce dignissim egestas enim, nec" +
    "faucibus lorem feugiat nec. Nullam interdum, purus non vehicula accumsan, dui est porta lorem," +
    "ut laoreet nisl arcu sit amet lacus. Integer nec odio a mauris malesuada consectetur. In pulvinar" +
    "blandit leo sed hendrerit. Nunc commodo, enim eu vestibulum vulputate, neque tortor pharetra felis," +
    "id bibendum est est eget libero. Donec sit amet eleifend purus. Fusce condimentum lectus sed finibus auctor." +
    "Nulla rutrum at libero in facilisis. Sed dapibus tempor nisi, a egestas massa convallis non. Quisque imperdiet"+
    "sem lacinia interdum feugiat. Aliquam pharetra interdum varius."
  },
  {
    title: "Project C",
    image: "http://www.publicdomainpictures.net/pictures/150000/velka/new-york-skyline.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis ornare" +
    "accumsan. Aenean ut blandit dui, lacinia efficitur nisi. Fusce dignissim egestas enim, nec" +
    "faucibus lorem feugiat nec. Nullam interdum, purus non vehicula accumsan, dui est porta lorem," +
    "ut laoreet nisl arcu sit amet lacus. Integer nec odio a mauris malesuada consectetur. In pulvinar" +
    "blandit leo sed hendrerit. Nunc commodo, enim eu vestibulum vulputate, neque tortor pharetra felis," +
    "id bibendum est est eget libero. Donec sit amet eleifend purus. Fusce condimentum lectus sed finibus auctor." +
    "Nulla rutrum at libero in facilisis. Sed dapibus tempor nisi, a egestas massa convallis non. Quisque imperdiet"+
    "sem lacinia interdum feugiat. Aliquam pharetra interdum varius."
  }
]

function seedDB() {
  //remove existing data
  Project.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("all data removed");
    data.forEach(function(project) {
      //create projects from data array
      Project.create(project, function(err, newProject) {
        if(err) {
          console.log(err);
        } else {
          console.log("new project created");
          //add testimonial to each project
          Testimonial.create({name: "Bob", text: "blah blah blah"}, function(err, comment) {
            if(err) {
              console.log(err);
            } else {
              newProject.testimonials.push(comment);
              newProject.save();
              console.log("testimonial added");
            }
          })
        }
      });
    });
  });
}


module.exports = seedDB;
