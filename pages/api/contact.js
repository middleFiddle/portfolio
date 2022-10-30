import nodemailer from "nodemailer"
import path from "path"

export default function Contact(req, res) {
    console.log(req.body)
    const { name, email, text, prounouns, attachments } = req.body

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "email-smtp.us-east-1.amazonaws.com",
        auth: {
            user: process.env.SES_USER,
            pass: process.env.SES_PASS,
        },
        secure: true,
        tls: {
            rejectUnauthorized: false,
        },
    })

    //return array of attachment objects based on selected format = (
    const attachThis = (attachments) => {
        const att = attachments.map((f) => {
            return {
                filename: `RyanGregory_DevResume${f}`,
                path: path.join(
                    __dirname,
                    `../../../../public/RyanGregory_DevResume${f}`
                ),
                contentType: "application/pdf",
            }
        })
        return att
    }

    const mailData = {
        from: "ryan@middlefiddle.dev",
        to: `${email}`,
        subject: `Message From MiddleFiddle.dev`,
        text: `${text}`,
        html: `<div>${text}</div>`,
        attachments: attachThis(attachments),
    }
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error)
        } else {
            console.log("Server is ready to take our messages")
        }
    })

    transporter.sendMail(mailData, function (err, info) {
        if (err) console.log(err)
        else console.log(info)
    })
    res.status(250).send("Success!")
}
