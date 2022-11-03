import SESTransport from "nodemailer/lib/ses-transport"

import nodemailer from "nodemailer"
import path from "path"

export default async function Contact(req, res) {
    const { name, email, text, prounouns, attachments } = req.body

    const sesTransport = new SESTransport({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    })

    const transporter = nodemailer.createTransport(sesTransport)

    //return array of attachment objects based on selected format = (
    const attachThis = (attachments) => {
        const att = attachments.map((f) => {
            return {
                filename: `RyanGregory_DevResume${f}`,
                path: path.join(
                    __dirname,
                    `../../../../public/RyanGregory_DevResume${f}`
                ),
                contentType: `application/${f.substring(1)}`,
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

    return res.status(200).json({ json: "data" })
}
