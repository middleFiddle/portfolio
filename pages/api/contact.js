import nodemailer from "nodemailer"
let aws = require("@aws-sdk/client-ses")
import path from "path"
let { defaultProvider } = require("@aws-sdk/credential-provider-node")

export default async function Contact(req, res) {
    const { name, email, text, prounouns, attachments } = req.body

    const ses = new aws.SES({
        apiVersion: "2010-12-01",
        region: "us-east-1",
        defaultProvider,
    })

    const transporter = nodemailer.createTransport({
        SES: { ses, aws },
    })

    //return array of attachment objects based on selected format = (
    const attachThis = (attachments) => {
        if (typeof attachments === "object") {
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
        return []
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
        if (err) {
            console.log(err.message)
        } else {
            console.log(info.response)
        }
    })

    return res.json()
}
