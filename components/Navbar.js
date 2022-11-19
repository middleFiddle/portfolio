import Link from "next/link"

const Navbar = () => {
    return (
        <section id="navbar" className="bg-slate-800 text-sky-200">
            <ul className="flex flex-wrap list-none justify-center items-center  gap-4 font-mono tracking-tighter">
                <li className="basis-[100%] text-center">
                    <h1 className="text-emerald-300 hover:text-rose-300 text-2xl font-sans p-0 font-thin tracking-wide text-opacity-90">
                        <Link href="/">Ryan Gregory</Link>
                    </h1>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                {/*         <li>
          <Link href="/about">About</Link>
        </li> */}
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/ryanwilliamgregory/"
                    >
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/middleFiddle"
                    >
                        Github
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/file/d/12RxPKQTj0WyWPecX_HFIUxHHJu7a4bpX/view?usp=sharing"
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Navbar
