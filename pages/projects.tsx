import { imageConfigDefault } from "next/dist/shared/lib/image-config"
import ProjectCard from "../components/ProjectCard"

type Project = {
    title: string
    img: {
        src: string
        height: number
        width: number
    }
    url: string
    gitHub: string
    description: string
}

const atlVlns: Project = {
    title: "Atlanta Violins",
    img: {
        src: "/atlVlns.jpg",
        height: 601,
        width: 801,
    },
    url: "https://atl-vlns.vercel.app/",
    gitHub: "https://github.com/middleFiddle/atl_vlns",
    description:
        "This is a full stack app in development, built with Typescript, React, MySQL, Prisma, and Bootstrap 5 in Next.js.",
}

const passGen: Project = {
    title: "Password Generator",
    img: {
        src: "/passGen.jpg",
        height: 877,
        width: 1000,
    },
    url: "https://middleFiddle.github.io/pass-gen",
    gitHub: "https://github.com/middleFiddle/pass-gen",
    description:
        "This is simple SPA built to spec from a Figma design by frontendmentor.io.  It is built with Typescript, React, and TailwindCSS using Vite.",
}

const Pomodoro: Project = {
    title: "Pomodoro",
    img: {
        src: "pomo.jpg",
        width: 935,
        height: 862,
    },
    url: "https://middleFiddle.github.io/pomodoro_vite",
    gitHub: "https://github.com/middleFiddle/pomodoro_vite",
    description: "An adjustable pomodoro timer using vitawind",
}

const projects = () => {
    const projects: Project[] = [atlVlns, passGen]

    const builtCards = projects.map((project, i) => {
        return (
            <ProjectCard
                key={i}
                id={`project${i + 1}`}
                title={project.title}
                img={project.img}
                url={project.url}
                gitHub={project.gitHub}
                description={project.description}
            />
        )
    })

    return (
        <div
            className="container
     max-w-xl mx-auto pt-4 transition duration-1000 group pb-16"
        >
            <h2 className="text-rose-300 text-3xl leading-loose">Projects</h2>
            <div className="carousel ">{builtCards}</div>
            <div className="flex justify-center w-full py-2 gap-2 [overflow-anchor-none] ">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="#project1"
                    className="btn btn-xs"
                >
                    1
                </a>
                <a
                    href="#project2"
                    className="btn btn-xs"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    2
                </a>
            </div>
        </div>
    )
}

export default projects
