var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");


app.set('view engine', 'pug');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));


app.get('/', function(req, res) {

	res.render('index', {title: 'Котарсис'});

});

app.get('/contacts', function(req, res) {

	res.render('contacts', {title: 'Контакты'});

});

app.get('/about-us', function(req, res) {

	res.render('about-us', {title: 'Контакты'});

});

app.post('/contacts', function (req, res) {
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'shmebyulokk@gmail.com',
            pass: '******'
        }
    });

    var mailOptions = {
        from: 'shmebyulokk@gmail.com',
        to: 'shmebyulokk@gmail.com',
        subject: 'Заказ от ' + req.body.name,
        text: 'Имя: ' + req.body.name + '. Телефон:' + req.body.tel
    };

    var message = transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
    });


    res.redirect('/contacts');
});

app.listen(3000, function(){
	console.log('App is listening on localhost:3000')
})