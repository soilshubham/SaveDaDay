require('dotenv').config();
const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const User = require('../models/User');
const Birthday = require('../models/Birthday');


const signToken = userId => {
    return JWT.sign({
        iss: 'sahil',
        sub: userId,
        iat: new Date().getTime(),
    }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" })
}

userRouter.post("/register", (req, res) => {
    const { name, username, password, role } = req.body;

    User.findOne({ username }, (err, user) => {
        if (err)
            return res.status(500).json({ message: "Error has occured 1", msgError: true })
        if (user)
            return res.status(400).json({ message: "Username already exists", msgError: true })
        else {
            const newUser = new User({ name, username, password, role })
            newUser.save((err, user) => {
                if (err)
                    return res.status(500).json({ message: "Error has occured 2", msgError: true })
                else
                    return res.status(201).json({ message: "Account successfully created", msgError: false })
            })
        }
    })
});


userRouter.post("/login", passport.authenticate('local', { session: false }), (req, res) => {
    const { _id, name, username, role } = req.user;
    if (req.isAuthenticated()) {
        const token = signToken(_id);
        res.cookie('access_token', token, { httpOnly: true, sameSite: 'none', secure: true });
        res.status(200).json({ isAuthenticated: true, user: { _id, name, username, role } })
    }
    else
        res.status(401).json({ isAuthenticated: false, user: null })
});

userRouter.get("/logout", passport.authenticate('jwt', { session: false }), (req, res) => {
    res.clearCookie("access_token");
    res.json({ user: { username: "", role: "" }, status: true })
});

userRouter.post("/add-bday", passport.authenticate('jwt', { session: false }), (req, res) => {
    const bday = new Birthday(req.body)
    bday.save(err => {
        if (err)
            res.status(500).json({ message: err.message, msgError: true })
        else {
            req.user.birthdays.push(bday);
            req.user.save(err => {
                if (err)
                    res.status(500).json({ message: err.message, msgError: true })
                else
                    res.status(200).json({ message: "Birthday successfully created", msgError: false })
            })
        }
    })
});

userRouter.put("/edit-bday", passport.authenticate('jwt', { session: false }), (req, res) => {
    Birthday.updateOne(
        { _id: req.body.id },
        { $set: { birthday: req.body.date, name: req.body.name, desc: req.body.desc } },
        (err, updatedBday) => {
            if (err)
                res.status(500).json({ message: err.message, msgError: true })
            else
                res.status(200).json({ message: "Birthday successfully updated", msgError: false })
        }
    )
});

userRouter.post("/delete-bday", passport.authenticate('jwt', { session: false }), (req, res) => {
    Birthday.deleteOne(
        { _id: req.body._id },
        (err) => {
            if (err)
                res.status(500).json({ message: err.message, msgError: true })
            else
                res.status(200).json({ message: "Birthday successfully deleted", msgError: false })
        }
    )
});

userRouter.get("/birthdays", passport.authenticate('jwt', { session: false }), (req, res) => {
    User.findById({ _id: req.user._id }).populate('birthdays').exec((err, document) => {
        if (err)
            res.status(500).json({ message: "Error has occured", msgError: true })
        else {
            res.status(200).json({ birthdays: document.birthdays, authenticated: true })
        }
    })
});

userRouter.get("/admin", passport.authenticate('jwt', { session: false }), (req, res) => {
    if (req.user.role === 'admin') {
        res.status(200).json({ message: "You are an admin", msgError: false })
    }
    else {
        res.status(403).json({ message: "You are not an admin", msgError: true })
    }

});

userRouter.get("/authenticated", passport.authenticate('jwt', { session: false }), (req, res) => {
    const { username, role, name, _id } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { _id, name, username, role } })
});

module.exports = userRouter;