const localStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")


function initialize(passport){
    //Function to authenticate users
    const authenticateUsers = async (email, password, done) => {
        //get users by email
        const user = getUserByEmail(email)
        if (user == null){
            return done(null,false, {message: "No user found with that email"})
        }
    }
}