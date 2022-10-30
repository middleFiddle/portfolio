import React from "react"
import Link from "next/link"

const CallToAction = () => {
    return (
        <button
            className="mx-auto transition-all duration-1000 easy-in-out hover:cursor-pointer  hover:bg-indigo-400 hover:bg-opacity-40 rounded-md group flex flex-col p-1 bg-opacity-10 bg-indigo-400 "
            id="contact-button"
        >
            <Link href="/contact">
                <a>
                    <h2 className="transition-all duration-1000 easy-in-out text-rose-300 group-hover:text-rose-400 gourp-hover:text-opacity-75 group-hover:text-4xl group-hover:underline decoration-indigo-500 group-hover:decoration-yellow-200 group-hover:decoration-opacity-25 italic text-3xl font-semibold font-serif p-2 tracking-widest capitalize">
                        Recruit me!
                    </h2>
                </a>
            </Link>
        </button>
    )
}

export default CallToAction
