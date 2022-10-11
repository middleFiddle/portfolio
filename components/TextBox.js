import Link from "next/link"
import React from "react"

const TextBox = ({ readMe }) => {
  return (
    <div className="bg-sky-50 text-slate-800 font-mono text-lg font-thin leading-snug tracking-wide overflow-auto h-72">
      {readMe}
    </div>
  )
}

export default TextBox
