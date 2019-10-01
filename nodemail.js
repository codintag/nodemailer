var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'YourEmail@gmail.com',
    pass: 'Your-Password'
  }
});

var mailOptions = {
  from: 'YourEmail@gmail.com',
  to: 'WhoYouwantToSend@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy! just try it!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 