import nodemailer from 'nodemailer'

export default function Contact(req, res) {
  console.log(req.body)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'ryan.middlefiddle@gmail.com', // The account you signed up with SendinBlue
      pass: process.env.SMTP_PASS,
    },
    secure: true,
    tls: {
      rejectUnauthorized: false,
    }
  });
  const mailData = {
    from: 'demo email',
    to: 'your email',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
  // verify connection configuration
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  transporter.sendMail(mailData, function(err, info) {
    if (err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}
