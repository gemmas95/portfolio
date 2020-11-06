const mailer = require("nodemailer");

function Body() {
  return `
    <!DOCTYPE html>
    <html style="margin: 0; padding: 0;">
    
        <head>
            <title>Hello</title>
        </head>
    
            <body style="margin: 0; padding: 0;">
               <br />
               <br />
               <div>${req.body.message}</div>
               <br />
               <br />
            </body>
    
      </html>
    `;
}

const getEmailData = (to, name, template) => {
  const data = {
    from: req.body.email,
    to: "gemma1030@gmail.com",
    subject: Body(),
  };
  return data;
};

const sendEmail = (to, name, type) => {
  const smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
      user: "",
      pass: "",
    },
  });

  const mail = getEmailData(to, name, type);

  smtpTransport.sendMail(mail, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log(" email sent successfully");
    }
    smtpTransport.close();
  });
};

module.exports = { sendEmail };
