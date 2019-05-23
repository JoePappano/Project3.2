var db = require("../models");
var bcrypt = require("bcryptjs")
var passport = require("passport")

module.exports = function(app) {

app.get("/all", function(req, res) {
    db.Listing.findAll({}).then(function(results) {
      // console.log(results)
      res.json(results)
    });
  });

app.post("/newListing", function(req, res) { 

    db.Listing.create({
        User: req.body.userName,
        City: req.body.city,
        ProjectType: req.body.projectType,
        DescriptionOfWorkToBeDone: req.body.workDescription,
        Phone: req.body.phone
    }).then(function(results) {
      console.log(results)
      res.redirect("/ListingsTable")
      // res.json(results)
    });
  });

  app.post("/newProvider", function(req, res) {
    db.Provider.create({
      companyName: "bob",
      email: "abc company",
      servicesProvided: "lawncare"
    }).then(function(results) {
      res.redirect("/")
    })
  })

  app.post("/newUser", function(req, res) {
    let errors = [];
    
    //Check required fields
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.password2) {
      errors.push("Please fill in all fields.");
    }

    //check if passwords match
    if (req.body.password !== req.body.password2) {
      errors.push("Passwords do not match.")
    }

    //check password length
    if (req.body.password.length < 6) {
      errors.push("Password must be at least 6 characters.")
    }

    if (errors.length > 0) {
      // res.render("createUser"
      // , {
      //   errors
      // })
      // res.send("/createUser", {errors})
      // console.log("fdsafdsafdasfdsafds" , req.body)
      // res.status(406).json({errors})
      // console.log("res", res)
      // window.alert(errors)
      res.redirect("/errors")
    } else {
      db.User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2,
      }).then(function(results) {
        res.redirect("/signin")
      }); 
    }

    app.get("/queryListings", function(req, res) {
      db.Listing.findAll({
        where: {
          City: req.query.city,
        },
      }).then(function(results) {
        res.redirect("/ListingsTable")
        // res.json(results);
      });
    });

  app.post('/login', (req, res) => {
    passport.authenticate('local', { 
      successRedirect: '/createListing',
      failureRedirect: '/signIn',
      failureFlash: true })(req, res);
  });     

    // bcrypt.genSalt(10, (err, salt) => 
            //   bcrypt.hash(db.User.password, salt, (err, hash) => {
            //     if (err) throw err;
            //     //set password to hashed
            //     db.User.password = hash;
            //     //save user
            //     db.User.save()
            //     .then(user => {
            //       res.json(db.User)
            //     })
            //     .catch(err => console.log(err));
            //   }))
    
  })
}