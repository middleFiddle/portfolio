import React from "react"

const Navbar = () => {
  return (
    <section id="navbar" className="bg-slate-800 text-sky-200">
      <ul className="flex flex-wrap list-none justify-center items-center  gap-4 font-mono tracking-tighter">
        <li className="basis-[100%] text-center">
          <h1 className="text-emerald-200 hover:text-rose-300 text-2xl font-sans p-0 font-thin tracking-wide">
            <a href="index.html">Ryan Gregory</a>
          </h1>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ryanwilliamgregory/">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/middleFiddle">Github</a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1Cdn9ZkSuXY_D3kPg0lDGxe6NUdKojMiM/view?usp=sharing">
            Resume
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Navbar
