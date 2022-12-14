// THIS ROUTE CAN'T BE USED UNTIL RESERVED ENV NAMES CONFLICT CAN BE RESOLVED
import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"
let aws = require("@aws-sdk/client-ses")

let { defaultProvider } = require("@aws-sdk/credential-provider-node")

export default async function Contact(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { email, text, attachments } = req.body

    const ses = new aws.SES({
        apiVersion: "2010-12-01",
        region: "us-east-1",
        defaultProvider,
    })

    // we need to assume the right role

    const transporter = nodemailer.createTransport({
        SES: { ses, aws },
    })

    //return array of attachment objects based on selected format = (
    const attachThis = (attachments) => {
        if (typeof attachments === "object") {
            const _att = attachments.map((f) => {
                const attachment = {
                    filename: `Resume${f}`,
                    url: "",
                    contentType: `application/${f.substring(1)}`,
                }
                if (f === ".docx") {
                    attachment.url +=
                        "https://docs.google.com/document/d/e/2PACX-1vRsXSLdAG2Bdv36mAcWic9pe5dLad7X5aMVOeTVGmklwa74vBN2khBLjqI1EAJ3-Q/pub"
                }
                if (f === ".pdf") {
                    attachment.url +=
                        "https://drive.google.com/file/d/1gDdvISavh4uYX49qx5S9s0nY7Ve2D_Hd/view?usp=share_link"
                }
                return attachment
            })
            return _att
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
    await transporter.verify(function (error, success) {
        if (error) {
            console.log("server isn't ready for this")
        } else {
            console.log("Server is ready to take our messages")
        }
    })

    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            console.log({ ...err }, 85)
            return res.json(err.name)
        } else {
            console.log(98, { ...info })
            return res.json(info)
        }
    })
}
