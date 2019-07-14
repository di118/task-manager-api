const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)



const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to:email,
        from: 'daniel@regentsitsolutions.co.uk',
        subject: 'Thanks for joining Task Manager',
        text: ` Welcome to the app, ${name}. Let me know how you get alog with the app.`
    })
}

const sendCancelationEmail = (email, name) =>{
    sgMail.send({
        to:email,
        from:'daniel@regentsitsolutions.co.uk',
        subject:`Goodbye ${name}!`,
        text: `It's been an honour having you with us! Please let us know if there is anything we could do to improve our service!`

    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}