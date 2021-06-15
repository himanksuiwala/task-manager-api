const sgMail = require('@sendgrid/mail')

//const API_KEY = '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'


sgMail.setApiKey(process.env.API_KEY)

const sendWelcome = (email,name)=>
{
  sgMail.send({
    to: email,
    from: 'himanksuiwala@gmail.com',
    subject: 'HELLO FROM sendgrid',
    text: `Welcome to the app, ${name}`

  })
}
const cancel = (email,name)=>
{
  sgMail.send({
    to:email,
    from:'himanksuiwala@gmail.com',
    subject:"Why are you Leaving Us?",
    text:`GoodBye ${name}. See You Soon`
  })
}


module.exports={sendWelcome,cancel}

//sgMail.send(message).then((response) => console.log('EMAIL SEND'))
// .catch((error)=>console.log(error.message))
