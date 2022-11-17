import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"
import fs from "fs"
let aws = require("@aws-sdk/client-ses")
import path from "path"

let { defaultProvider } = require("@aws-sdk/credential-provider-node")

import Cors from "cors"
import { ReadStream } from "fs"

const cors = Cors({
    methods: ["POST", "GET", "HEAD"],
})

function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function
) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result)
            }
            return resolve(result)
        })
    })
}

export default async function Contact(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddleware(req, res, cors)
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
            const _att = attachments.map((f) => {
                return {
                    filename: `RyanGregory_DevResume${f}`,
                    path: path.join(
                        __dirname,
                        `../../../../public/RyanGregory_DevResume${f}`
                    ),
                    contentType: `application/${f.substring(1)}`,
                }
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
    let confirm = await transporter.verify(function (error, success) {
        if (error) {
            console.log("server isn't ready for this")
        } else {
            console.log("Server is ready to take our messages")
            return success
        }
    })

    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            console.log({ ...err }, 85)
            err = {
                name: { ...err }.message,
                code: { ...err }.$metadata.httpStatusCode,
            }
            res.status(err.code).send(err.name)
        } else {
            console.log(98, { ...info })
            info = {
                name: `Sent Resume to: ${{ ...info }.envelope.to[0]}`,
                code: 200,
            }
            res.status(info.code).send(info.name)
        }
    })
}
