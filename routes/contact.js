var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

router.get('/contact', (req,res) => {
    res.locals.title = "Mustafiz's contacts"; 
    res.render('personal/contact');
})

router.post('/contact', (req,res) => {
    res.locals.title = "Mustafiz's contacts"; 
    var output = `
        <p>You have new contact request </p>
        <h4>${ req.body.name }</h4>
        <h4>${ req.body.email }</h4>
        <h2>Message</h2>
        <p> ${req.body.message} </p>
    `;

    console.log(req.body);

    var smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "kaifee000@gmail.com",
            pass: "aflqpwsmcowfxqwf"
        }
    });
    
    var mail = {
        from: `${ req.body.name } ${ req.body.email }`,
        to: "codesthaan@gmail.com",
        subject: "Mail from website",
        text: "Node.js New world for me",
        html: output
    }
    
    smtpTransport.sendMail(mail, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.id);
            
        }
        smtpTransport.close();
    });
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(mail));

    res.render('personal/contact')
})

module.exports = router;