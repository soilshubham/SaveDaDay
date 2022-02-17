require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('./models/User');

const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['access_token'];
    }
    return token;
}

// Authorization 
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.JWT_SECRET_KEY
}, (payload, done) => {
    User.findById(payload.sub, (err, user) => {
        if (err)
            return done(err, false);

        if (user)
            return done(null, user);

        else
            return done(null, false);
    })
}))

// Authentication local strategy using username and password
passport.use(new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
        // Something went wrong with the database
        if (err)
            return done(err);

        // User not found
        if (!user)
            return done(null, false);

        // Check if Password Correct
        user.comparePassword(password, done)
    })
}))