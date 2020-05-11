var express = require('express');
var router = express.Router({mergeParams : true});
var passport = require('passport');
var User = require('../model/user');



router.get('/register', (req,res) => {
    res.locals.title = 'Register';
    res.render('auth/register');
})


router.post("/register", (req,res) => {
    var username = req.body.username;
    var password = req.body.password;
    User.register(new User({username:username}), password, function(err,user){
        if(err){
            console.log(err);
            return res.render('auth/register');
        }
        passport.authenticate('local')(req,res, function(){
            res.redirect('/');
        });
    } )
})

router.get('/login', (req,res) => {
    res.locals.title = 'Login';
    res.render('auth/login');
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}) ,(req,res) => {
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})


function isLoggedIn(req, next, res ){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}


module.exports = router;