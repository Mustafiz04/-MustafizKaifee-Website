var express = require('express');
var router = express.Router({mergeParams : true});
var Project = require('../model/projects');
var quill_render = require('quill-render');


router.get('/', (req, res) => {
    res.locals.title = "Mustafiz's home page"; 
    res.render('personal/index', {currentUser: req.user});
})

router.get('/project', (req,res) => {
    res.locals.title = "Mustafiz's projects"; 
    Project.find({}, (err, allProjects) => {
        if(err){
            console.log(err);
        }else{
            res.render('personal/project', {projects : allProjects});
        }
    })
    
})


router.get('/skill', (req,res) => {
    res.locals.title = "Mustafiz's skills"; 
    res.render('personal/skill');
})

router.get('/disclaimer', (req, res) => {
    res.locals.title = "Disclaimer"; 
    res.render('policy/disclaimer');
})

router.get('/privacypolicy', (req, res) => {
    res.locals.title = "Privacy Policy"; 
    res.render('policy/privacypolicy');
})

// router.get('/:name', (req,res) => {
//     var thisname = req.params.name;
//     res.render('home.ejs', {name: thisname})
// })

// router.get('*', (req,res) => {
//     res.send("Page not found");
// })



module.exports = router;