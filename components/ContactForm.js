import { useForm } from "react-hook-form"

import React from "react"

const ContactForm = () => {
  return (
    <form className="form-control">
      <label className="label">
        <span className="label-text">What{`\u0027`}s your name?</span>
      </label>
      <input type="text" className="input" placeholder="{ Your Name }" />
      <label className="label">
        <span className="label-text">What are your preferred prounoun(s)?</span>
      </label>
      <div className="input-group">
        <label className="label cursor-pointer">
          <span className="label-text">She/Her</span>
          <input type="checkbox" className="checkbox" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text">They/Them</span>
          <input type="checkbox" className="checkbox" />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text">He/Him</span>
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
      <label>
        <span className="label-text">
          Add your email to receive my resume and a friendly introduction!
        </span>
      </label>
      <input
        type="text"
        className="input"
        placeholder="{ email@address.com }"
      />
      <label>
        <span className="label-text">Pick the format(s) you'd like:</span>
      </label>
      <div className="btn-group space-x-2">
        <label className="label cursor-pointer flex space-x-4">
          <span className="label-text">.DOC</span>
          <input type="checkbox" className="toggle" />
        </label>

        <label className="label cursor-pointer flex space-x-4">
          <span className="label-text">.PDF</span>
          <input type="checkbox" className="toggle" />
        </label>
      </div>
    </form>
  )
}

export default ContactForm
