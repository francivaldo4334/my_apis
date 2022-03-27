var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'frncvldreisdev@gmail.com',
      pass: 'fr@nssddev'
    }
  });
var mailOptions = {
    from: 'frncvldreisdev@gmail.com',
    to: 'frncvldreisdev@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
function test(){
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    }); 
}
export default test;