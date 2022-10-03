import React from "react"

const CallToAction = () => {
  return (
    <div
      className="transition easy-in-out hover:cursor-pointer max-w-sm border bg-indigo-400 hover:bg-indigo-500 hover:border-sky-200 p-1 text-justify rounded-md border-sky-300 group"
      id="contact"
    >
      <h2 className="text-rose-200 group-hover:text-red-300 italic text-3xl font-semibold font-serif">
        Recruit me!
      </h2>
      <h6 className="text-emerald-100 text-lg italic tracking-tight group-hover:text-emerald-200 p-1">
        If you are seeking a candidate with a collaborative mindset, strong web
        fundamentals, and a curious mind, please reach out.
      </h6>
    </div>
  )
}

export default CallToAction
