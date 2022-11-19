import Head from "next/head"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
//import { allPosts } from "contentlayer/generated"
import Link from "next/link"
import ProjectCard from "../components/ProjectCard"
import TitleCard from "../components/TitleCard"
import CallToAction from "../components/CallToAction"
import Navbar from "../components/Navbar"
import ContactForm from "../components/ContactForm"
/* 
export async function getStaticProps() {
  const posts = allPosts

  return {
    props: {
      posts,
    },
  }
} */

/* const titles = [
  "Intro",
  "Tell Me More",
  "Interview Questions",
  "Personal History",
  "I'm Complicated",
  "Atlanta Violins Project",
] */

export default function Home(
    {
        /*posts*/
    }
) {
    /*   const getText = (t) => {
    return posts.find((p) => p.title == t)
  }

  const readMe = (t) => {
    return (
      <div
        id={t.split(" ").join("")}
        key={getText(t).id}
        dangerouslySetInnerHTML={{ __html: getText(t).body.html }}
      ></div>
    )
  } */

    return (
        <div>
            <div className="mt-16">
                <section
                    id="intro"
                    className="flex-col justify-center max-w-md mx-auto items-center space-y-4"
                >
                    <TitleCard></TitleCard>
                    <div
                        id="text-box"
                        className="font-serif text-lg leading-relaxed tracking-widest text-indigo-100 text-opacity-90 bg-gradient-to-b mb-2 rounded-md shadow-slate-800 p-1 from-slate-900  bg-slate-800 shadow-lg bg-opacity-80"
                    >
                        <p>
                            I{"\u0027"}m a web developer from Atlanta 🍑. I
                            focus on enabling contractors, artists, and small
                            businesses to expand their capacity to serve clients
                            and customers, while reducing the burden of
                            repetitive tasks that can create bottlenecks,
                            especially for self-employed people.
                        </p>
                        <p className="p-0">
                            My strongest stack is full stack Typescript
                            development with React and Tailwind CSS on the front
                            end, MySQL and Prisma handling data, with routing,
                            API endpoints, and fine-grained control over
                            server/client rendering with Nextjs.
                        </p>
                    </div>
                    <div className="shadow-inner ">
                        <CallToAction></CallToAction>
                    </div>
                </section>
            </div>
            {/*       <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
        </div>
    )
}
