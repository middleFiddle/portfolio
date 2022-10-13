import React from "react"
import Link from "next/link"

const CallToAction = () => {
  return (
    <button
      className="max-w-md mx-auto transition-all duration-1000 easy-in-out hover:cursor-pointer border hover:bg-indigo-400 hover:bg-opacity-40 hover:border-slate-400 rounded-md border-slate-500 group flex flex-col justify-center items-center text-center p-1 bg-opacity-10 bg-indigo-400 "
      id="contact-button"
    >
      <Link href="/contact">
        <a>
          <h6 className="transition-all duration-1000 easy-in-out text-emerald-200 text-lg italic font-serif tracking-tightest group-hover:text-emerald-300 leading-snug ">
            If you are seeking to hire someone with a collaborative mindset,
            strong web development fundamentals, who is driven by genuine
            curiosity, please
          </h6>
          <h2 className="transition-all duration-1000 easy-in-out text-rose-300 group-hover:text-rose-400 gourp-hover:text-opacity-75 group-hover:text-4xl group-hover:underline decoration-indigo-500 group-hover:decoration-yellow-200 group-hover:decoration-opacity-25 italic text-3xl font-semibold font-serif pt-2">
            Recruit me!
          </h2>
        </a>
      </Link>
    </button>
  )
}

export default CallToAction
