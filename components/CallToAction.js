import React from "react"
import Link from "next/link"

const CallToAction = () => {
    return (
        <button
            className="mx-auto transition-all duration-1000 easy-in-out hover:cursor-pointer  hover:bg-rose-400 hover:bg-opacity-75 rounded-md group flex flex-col p-1 bg-opacity-10 bg-indigo-400 min-w-50"
            id="contact-button"
        >
            <Link href="/contact">
                <a>
                    <h2 className="transition-all duration-1000 easy-in-out text-rose-300 group-hover:text-indigo-800  group-hover:underline decoration-indigo-300 group-hover:decoration-yellow-200 italic text-3xl font-thing font-serif p-2 tracking-widest capitalize">
                        Hiring?
                    </h2>
                </a>
            </Link>
        </button>
    )
}

export default CallToAction
