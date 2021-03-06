var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Project = require("./models/project");
var Testimonial = require("./models/testimonials");
var methodOverride = require("method-override");
var seedDB = require("./seeds");

//app config
mongoose.connect("mongodb://localhost/my_portfolio");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));

seedDB();

//ROUTES
app.get("/", function(req, res) {
  res.redirect("/projects");
});
app.get("/projects", function(req, res) {
  Project.find({}, function(err, projects) {
    if(err) {
      console.log(err);
    } else {
      res.render("projects/index", {projects: projects});
    }
  });
});
//new and create routes
app.get("/projects/new", function(req, res) {
  res.render("projects/new");
});
app.post("/projects", function(req, res) {;
  Project.create(req.body.project, function(err, project) {
    if(err) {
      console.log(err);
    } else {
      res.redirect("/projects");
    }
  });
});
//show route
app.get("/projects/:id", function(req, res) {
    Project.findById(req.params.id, function(err, project) {
      if(err) {
        console.log(err);
      } else {
        res.render("projects/show", {project: project})
      }
    });
});
//edit route
app.get("/projects/:id/edit", function(req, res) {
    Project.findById(req.params.id, function(err, project) {
      if(err) {
        console.log(err);
      } else {
        res.render("projects/edit", {project: project})
      }
    });
});
//update route
app.put("/projects/:id", function(req, res) {

  Project.findByIdAndUpdate(req.params.id, req.body.project,function(err, project) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/projects/" + req.params.id)
    }
  });
});

//testimonials routes
app.get("/projects/:id/testimonials/new", function(req, res) {
    Project.findById(req.params.id, function(err, foundProject) {
      if(err) {
        console.log(err);
      } else {
        res.render("testimonials/new", {project: foundProject});
      }
    });
});




//set up server
app.listen(8080, function() {
  console.log("The server is listening");
});
