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
function test(request,response){
    response.json({
        name:"fran"
    });
    
}
export default test;