var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var localStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var User = require('./model/user')


var indexRoutes = require('./routes/index');
var blogRoutes = require('./routes/blog');
var contactRoutes = require('./routes/contact');
var authRoutes = require('./routes/auth');

mongodb+srv://Mustafiz04:Pgagpta@04@mustafizkaifee-tmlge.mongodb.net/test?retryWrites=true&w=majority;

const url = process.env.MONGODB_URL || 'mongodb://localhost/blog';
mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true}).then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
});





app.use(require('express-session')({
    secret : "Mustafiz is the best",
    resave : false,
    saveUninitialized:false
}));


app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(indexRoutes);
app.use(blogRoutes);
app.use(contactRoutes);
app.use(authRoutes);





// var Project = require('./model/projects');
// var g = new Cat({
//     name : "George",
//     age : 11,
//     temperament : "Grouchy"
// });
// g.save((err, cat) => {
//     if(err){
//         console.log("Something went wrong");
//     }else{
//         console.log("We just add new cat");
//         console.log(cat);
//     }
// });

// Project.create({
//     photoname : "airpollutionindex.jpg",
//     descriptions : "Solution of HackerEarth Machine Learning challenge: Calculate the air pollution index with 91.5182% accuracy.",
//     links : "https://github.com/Mustafiz04/Air-Pollution-Index"
// }, (err, blog) => {
//     if(err){
//         console.log("Something went wrong");
//     }else{
//         console.log("We just add new projects");
//         console.log(blog);
//     }
// } );

// app.get('*', (req,res) => {
//     res.send("Page not found");
// })



var PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is running on " + PORT));