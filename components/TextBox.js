import Link from "next/link"
import React from "react"

const TextBox = ({ readMe }) => {
  return (
    <div className="bg-sky-50 text-violet-900 ring-1 font-serif text-lg leading-snug tracking-wide overflow-hidden h-96">
      {readMe}
    </div>
  )
}

export default TextBox
