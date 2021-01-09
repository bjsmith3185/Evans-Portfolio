// All code creating email in module.exports object
//All logic of setting up connections

// Send email method
// >will process email


// Functions to send send email and auto-reply to sender
module.exports = {
    sendEmail: function(data) {

        return new Promise((resolve, reject) => {
        console.log(" #3  in the sendEmail()")
        console.log(data)

        // here we will put the logic from emailConf.js to actually send the email

        
        console.log(" #4   email successfully sent")
        resolve(data);

        })
    }

}

  

