// require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var Sequelize = require("sequelize");
var flash = require("connect-flash");
var session = require("express-session")
var passport = require("passport");
var path = require('path');



var app = express();



var PORT = process.env.PORT || 3001;



//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Static file declaration
app.use(express.static(path.join(__dirname, '/public/')));

//production mode
// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/public/')));
//   //
//   app.get('*', (req, res) => {
//     res.sendfile(path.join(__dirname = '/public/index.html'));
//   })
// }
//build mode
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/public/index.html'));
// })

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