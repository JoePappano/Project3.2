const LocalStrategy = require("passport-local").Strategy;
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
const db = require("../models");
const passport = require("passport");

// load user model
// const User = require("../models/users")

module.exports = function(passport) {

    passport.use(
        new LocalStrategy({ usernameField: "email"}, (email, password, done) => {
            //match user
            db.User.findOne({where: {email: email}}).then(function(user, err) {
                console.log("email", email)
                console.log("error", err)
                console.log("user", user.password)
                console.log("password -----", password);
                console.log("done432432432", done)
                if (!user) {
                    return done(null, false, { message: "Incorrect username." });
                }
                if(!user.password) {
                    return done(null, false, { message: "Incorrect password." });
                }
                return done(null, user);
            })
        })
    );
    
}