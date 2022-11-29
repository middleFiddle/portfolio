import React from "react"
import ContactForm from "../components/ContactForm"
import Script from "next/script"

const contact = () => {
    return (
        <div>
            <Script src="https://smtpjs.com/v3/smtp.js" />
            <ContactForm></ContactForm>
        </div>
    )
}

export default contact
