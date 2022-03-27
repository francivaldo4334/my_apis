var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'frncvldreis@gmail.com',
      pass: 'Fr@nssdd4334'
    }
  });
var mailOptions = {
    from: 'frncvldreis@gmail.com',
    to: 'frncvldreis@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  export default function test(){
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
  }