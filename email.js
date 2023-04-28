var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'guif.262626@gmail.com',
    pass: 'ykltceclxrqzbwfe'
  }
});

var mailOptions = {
  from: 'guif.262626@gmail.com',
  to: 'guif.262626@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 