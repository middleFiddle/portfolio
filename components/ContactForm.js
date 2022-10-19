import { appendErrors, useForm } from "react-hook-form"

import { useState } from "react"

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const mailText =
        "Thank you sincereley for taking the time to contact me.  If you think I may be a good candidate for your team let's do stay in touch."

    const sendIntro = (data) => {
        console.log("Sending", data)
        fetch("/api/contact", {
            method: "POST",
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
        }).then((res) => {
            console.log("Fetch: ", res)
            res.status === 200 ? console.log("/success") : console.log("/error")
        })
    }
    const showError = (err) => {
        console.log("oops", err)
    }

    return (
        <div
            id="contact-form"
            className="container mx-auto min-w-lg max-w-lg mt-16 p-4 bg-purple-900 bg-opacity-10 text-sky-200"
        >
            <form
                className="form-control flex-col space-y-4 shadow-lg"
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
                        <span className="label-text">She/Her</span>
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
                        <span className="label-text text-sky-200">.DOCX</span>
                        <input
                            {...register("format")}
                            value=".docx"
                            type="checkbox"
                            className="toggle"
                        />
                    </label>

                    <label className="label cursor-pointer flex space-x-4">
                        <span className="label-text text-sky-200">.PDF</span>
                        <input
                            {...register("format", { required: true })}
                            value=".pdf"
                            type="checkbox"
                            className="toggle"
                        />
                    </label>
                </div>
                <input className="btn" type="submit" value="fire away!" />
            </form>
        </div>
    )
}

export default ContactForm
