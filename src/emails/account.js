const sgMail = require('@sendgrid/mail')

//const sendgridAPIKey = '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' 

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ahirwarayush2@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app ${name}!`
    }).then(() => {}, error => {
            console.error(error);
         
            if (error.response) {
              console.error(error.response.body)
            }
          });
}

const sendDeleteEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ahirwarayush2@gmail.com',
        subject: 'Account deleted',
        text: `Your account has been successfuly removed ${name}.`
    }).then(() => {}, error => {
            console.error(error);
         
            if (error.response) {
              console.error(error.response.body)
            }
          });
}

module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}
