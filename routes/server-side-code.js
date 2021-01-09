// var express = require('express');
// var router = express.Router();
// var nodemailer = require('nodemailer');
// var cors = require('cors');
// const creds = require('../config/config');

// var transport = {
//     host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
//     port: 587,
//     auth: {
//         user: creds.USER,
//         pass: creds.PASS
//     }
// }

// var transporter = nodemailer.createTransport(transport)

// transporter.verify((error, success) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Server is ready to take messages');
//     }
// });

// router.post('/send', (req, res, next) => {
//     var firstName = req.body.firstName
//     var lastName = req.body.lastName
//     var email = req.body.email
//     var occupation = req.body.occupation
//     var subject = req.body.subject
//     var message = req.body.message
//     var content = `
//     firstName: ${firstName} \n 
//     lastName: ${lastName} \n
//     email: ${email} \n 
//     occupation: ${occupation} \n
//     subject: ${subject}
//     message: ${message} `

//     var mail = {
//         from: (firstName + '' + lastName),
//         to: 'evanbero1980@gmail.com',  // Change to email address that you want to receive messages on
//         subject: 'New Message from evanDev Contact Form',
//         text: content
//     }

//     transporter.sendMail(mail, (err, data) => {
//         if (err) {
//             res.json({
//                 status: 'fail'
//             })
//         } else {
//             res.json({
//                 status: 'success'
//             })
//         }
//     });

//     // Auto-reply confirmation email to sender
//     transporter.sendMail({
//         from: "evanbero1980@gmail.com",
//         to: email,
//         subject: "Submission was successful",
//         text: `Thank you for contacting us!\n\nForm details\n Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`
//     }, function(error, info){
//         if(error) {
//             console.log(error);
//         } else{
//             console.log('Message sent: ' + info.response);
//         }
//     });
// })

// const app = express()
// app.use(cors())
// app.use(express.json())
// app.use('/', router)
// app.listen(3000)