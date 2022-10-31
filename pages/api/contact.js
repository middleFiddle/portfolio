import nodemailer from "nodemailer"
import path from "path"

export default async function Contact(req, res) {
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
            rejectUnauthorized: true,
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
        from: "RyanGregory@middlefiddle.dev",
        to: `${email}`,
        subject: `Message From MiddleFiddle.dev`,
        text: `${text}`,
        html: `<div>${text}</div>`,
        attachments: attachments ? attachThis(attachments) : null,
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

    return res.status(200).json({ json: "data" })
}