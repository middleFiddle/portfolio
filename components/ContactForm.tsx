import { appendErrors, useForm } from "react-hook-form"
import Link from "next"
import { useState } from "react"
import { data } from "autoprefixer"

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [name, setName] = useState("")
    const mailText =
        "Thank you sincerely for taking the time to contact me.  If you think I may be a good candidate for your team let's do stay in touch."

    const sendIntro = async (data) => {
        console.log("Sending", data)
        const response = await fetch("/api/smtp-contact", {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                text: mailText,
                pronouns: data.gender,
                attachments: data.format,
            }),
        })
        console.log("Receiving", response)
        if (response.status === 200) {
            setName(data.name)
            setSuccess(true)
        } else {
            setName(data.name)
            setError(true)
        }
        return response
    }
    const showError = (err) => {
        console.log("oops", err)
    }

    return (
        <div
            id="contact-form"
            className="container mx-auto min-w-lg max-w-lg mt-16 p-4 bg-purple-900 bg-opacity-10 shadow-2xl"
        >
            <form
                className="form-control flex-col space-y-4"
                onSubmit={handleSubmit(sendIntro, showError)}
            >
                <label className="label">
                    <span className="label-text">
                        What{`\u0027`}s your name?
                    </span>
                </label>
                {errors.name?.type === "required" && (
                    <div
                        role="alert"
                        className="alert alert-error text-sm py-1 text-indigo-800 font-mono justify-center max-w-fit flex-nowrap"
                    >
                        <div className="h-4 w-4 flex-shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <span>My name is Ryan! What{"\u0027"}s yours?</span>
                    </div>
                )}
                <input
                    {...register("name", { required: true })}
                    type="text"
                    className="input"
                    placeholder="{ Your Name }"
                />
                <label className="label">
                    <span className="label-text">
                        What are your preferred prounoun(s)?
                    </span>
                </label>
                {errors.gender?.type === "required" && (
                    <div
                        role="alert"
                        className="alert alert-error w-fit h-fit text-sm py-1 justify-center text-indigo-800 font-mono "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current flex-shrink-0 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>Pick at least one</span>
                    </div>
                )}
                <div
                    {...register("gender", { required: true })}
                    aria-invalid={errors.gender ? "true" : "false"}
                    className="input-group"
                >
                    <label className="label cursor-pointer">
                        <span className="label-text ">She/Her</span>
                        <input
                            {...register("gender")}
                            value="she"
                            type="checkbox"
                            className="checkbox"
                        />
                    </label>
                    <label className="label cursor-pointer">
                        <span className="label-text">They/Them</span>
                        <input
                            {...register("gender")}
                            value="they"
                            type="checkbox"
                            className="checkbox"
                        />
                    </label>
                    <label className="label cursor-pointer">
                        <span className="label-text">He/Him</span>
                        <input
                            {...register("gender")}
                            value="he"
                            type="checkbox"
                            className="checkbox"
                        />
                    </label>
                </div>
                <label className="label">
                    <span className="label-text">
                        Add your email to receive my resume and a friendly
                        introduction!
                    </span>
                </label>
                {errors.email?.type === "required" && (
                    <div
                        role="alert"
                        className="alert alert-error w-fit h-fit text-sm py-1 justify-center text-indigo-800 font-mono "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current flex-shrink-0 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>We need your email address!</span>
                    </div>
                )}
                <input
                    {...register("email", {
                        required: true,
                    })}
                    type="email"
                    className="input"
                    placeholder="{ email@address.com }"
                />
                <label>
                    <span className="label-text">
                        Pick the format(s) you{"\u0027"}d like:
                    </span>
                </label>
                {errors.format?.type === "required" && (
                    <div
                        role="alert"
                        className="alert alert-error w-fit h-fit text-sm py-1 justify-center text-indigo-800 font-mono "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current flex-shrink-0 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>Pick one or both</span>
                    </div>
                )}
                <div {...register("format")} className="btn-group space-x-2">
                    <label className="label cursor-pointer flex space-x-4">
                        <span className="label-text ">.DOCX</span>
                        <input
                            {...register("format")}
                            value=".docx"
                            type="checkbox"
                            className="toggle"
                        />
                    </label>

                    <label className="label cursor-pointer flex space-x-4">
                        <span className="label-text ">.PDF</span>
                        <input
                            {...register("format", { required: true })}
                            value=".pdf"
                            type="checkbox"
                            className="toggle"
                        />
                    </label>
                </div>
                <input
                    className="btn mx-auto"
                    type="submit"
                    value="Let's connect!"
                />
            </form>
            {success && (
                <div className="alert alert-success shadow-lg">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>
                            Thank you for your interest,{" "}
                            <span className="text-purple-800 font-semibold">
                                {name}
                            </span>
                            ! You should receive my resume in your inbox
                            shortly. I look forward to connecting with you!
                        </span>
                    </div>
                </div>
            )}
            {error && (
                <div className="alert alert-error shadow-lg bg-opacity-75">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>
                            Sorry,
                            <span className="text-purple-800 font-semibold">
                                {" "}
                                {name}
                            </span>
                            ! Something isn{"\u0027"}t working quite right in
                            the land of serverless! Click{" "}
                            <a
                                className="text-sky-400 hover:underline"
                                href="https://drive.google.com/file/d/1gDdvISavh4uYX49qx5S9s0nY7Ve2D_Hd/view?usp=share_link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                here for my resume
                            </a>{" "}
                            and drop me a line at{" "}
                            <a
                                className="text-amber-100 hover:underline"
                                href="mailto:ryan.middleFiddle@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ryan.middleFiddle@gmail.com
                            </a>{" "}
                            I look forward to connecting with you!
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ContactForm
