var express = require('express');
var router = express.Router({mergeParams : true});
var Blog = require('../model/blog');


router.get('/blog', isLoggedIn, (req, res) => {
    res.locals.title = "Blog"; 
    Blog.find({}, (err,allBlogs) =>{
        if(err){
            console.log(err);
        }else{
            res.render('personal/blog', {blogs : allBlogs} );
            // console.log(allBlogs)
        }
    })
})

router.get("/blog/r/:id", (req,res) =>{
    res.locals.title = "View blog"; 
    var id = req.params.id;
    Blog.findById(id, (err, foundBlog) =>{
        if(err){
            console.log;
        }else{
            res.render('personal/showblog', {blogs: foundBlog});
        }
    })
} )

function isLoggedIn(req, res, next ){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}


module.exports = router;