const router = require("express").Router();
const emailer = require('../emailer/sendEmail')

router.route("/").post((req, res) => {
    console.log(" #1   in the email-route.js file. processEmail()")

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const occupation = req.body.occupation
    const subject = req.body.subject
    const message = req.body.message
    const content = `
    firstName: ${firstName} \n 
    lastName: ${lastName} \n
    email: ${email} \n 
    occupation: ${occupation} \n
    subject: ${subject} \n
    message: ${message} `

    console.log(content);

    // here we will call the sendEmail(req.body)

    return new Promise((resolve, reject) => {
        console.log(" #2   preparing to send content data to the sendEmail()")
        emailer.sendEmail(content)
          .then((result) => {
            console.log(" #5   data sent to sendEmail()");
            
            resolve(res.send(result));
          })
          .catch((e) => {
            console.log(
              "------------ an error occurred sending data for emailer ----------"
            );
            console.log(e);
            reject(e);
          });
      });


  
    
    
  });

  module.exports = router;

