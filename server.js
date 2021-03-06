// require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var Sequelize = require("sequelize");
var flash = require("connect-flash");
var session = require("express-session")
var passport = require("passport");
var path = require('path');
// var morgan = require('morgan');



var app = express();



var PORT = process.env.PORT || 3001;



//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(morgan('common'))

//Static file declaration
// app.use(express.static("./client/public/"));
// app.use(express.static('public'))



app.set("view engine", "ejs");

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);


var db = require("./models");

//Express-Session Middleware
app.use(session({
  secret: "secret",
  resave: true,
  saveUnitialized: true,
}));

//passport middleware
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

//Connect flash
app.use(flash());

//Routes aka Controller
require("./controller/apiRoutes")(app);
// require("./config/connection")(app);

// app.use(express.static("./client/build/"));

// //Static file declaration
// app.use('/static', express.static(path.join(__dirname, 'build')));

//production mode
if(process.env.NODE_ENV === 'production') {
  // app.use('/static', express.static(path.join(__dirname, 'build')));
  app.use(express.static(path.join('build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname + 'build/index.html'));
  })
}
// //build mode
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/Project3.2/build/index.html'));
// })


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}


//Starting server  
db.sequelize.sync({force: true}).then(function(){
    app.listen(PORT, function() {
      console.log("========================")
        console.log(
            "Listening on port " + PORT + " Visit http://localhost:" + PORT + "/"
        )
        console.log("========================")
    })
})






module.exports = app