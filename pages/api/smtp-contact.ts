import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function stmpContact(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let transporter = nodemailer.createTransport({
        port: 587,
        secure: false,
        host: "email-smtp.us-east-1.amazonaws.com",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    })
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error)
        } else {
            console.log(success)
        }
    })

    const { email, text, attachments } = req.body
    const mailData = {
        from: "ryan.middlefiddle@gmail.com",
        to: `${email}`,
        subject: `Message From MiddleFiddle.dev`,
        text: `${text}`,
        html: `<div>${text}</div>`,
        attachments: attachThis(attachments),
    }

    function attachThis(attachments: string[]): Att {
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

    let info = await transporter.sendMail(mailData)
    console.log(info)

    return res.json(info)
}
type Att = {
    filename: string
    url: string
    contentType: string
}[]
