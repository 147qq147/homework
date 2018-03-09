const fs = require('fs');
const nodemailer = require('nodemailer');

let file = 'file.txt';
let dataToAppend = 'some new text';
	fs.appendFileSync(file,'\r\n' + dataToAppend);

let fileData = fs.readFileSync(file, 'utf8');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shmebyulokk@gmail.com',
    pass: '147qq147'
  },
   tls: {
        rejectUnauthorized: false
   }
});

var mailOptions = {
  from: 'shmebyulokk@gmail.com',
  to: 'grishano.evgn@gmail.com',
  subject: 'Наконец-то работает',
  text: fileData
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});