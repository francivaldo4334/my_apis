const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth:{
        user: "frncvldreisdev@gmail.com",
        pass: "fr@nssddev"
    },
    tls:{
        rejectUnauthorized: false,
    }
});
async function run(){
    const mailSent = await transporter.sendMail({
        text: 'Texto do email',
        subject: 'Assunto do email',
        from: 'francivaldo costa<frncvldreisdev@gmail.com',
        to: ['frncvldreisdev@gmail.com','frncvldreisdev@gmail.com'],
    });
    console.log(mailSent);
}
run();