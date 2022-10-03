import Link from "next/link"
import React from "react"

const TextBox = ({ readMe }) => {
  return (
    <div className="bg-sky-50 text-slate-900 font-mono text-lg leading-snug tracking-wide overflow-auto h-96">
      {readMe}
    </div>
  )
}

export default TextBox
