// Functions to send send email and auto-reply to sender

module.exports = {
    transport: {
        host: 'smtp.gmail.com', // SMTP host of provider
        port: 587,
        auth: {
            user: creds.USER,
            pass: creds.PASS
        }
    },

    transporter: nodemailer.createTransport(transport),

    mail: {
        from: (firstName + '' + lastName),
        to: 'evanbero1980@gmail.com',
        subject: 'New Message from evanDev Contact Form',
        text: content
    },


    // Send and confirm status of email function
    sendMessage: function () {
        transporter.sendMail(mail, (err, data) => {
            if (err) {
                res.json({
                    status: 'fail'
                })
            } else {
                res.json({
                    status: 'success'
                })
            }
        })
    },

    // Auto-reply confirmation email to sender
    autoReply: function () {
        transporter.sendMail({
            from: "evanbero1980@gmail.com",
            to: email,
            subject: "Submission was successful",
            text: `Thank you for contacting me!\n
                Form details\n 
                Name: ${firstName} ${lastName}\n
                Email: ${email}\n
                Message: ${message}`
        },
            function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Message sent: ' + info.response);
                }
            })
    }
};
