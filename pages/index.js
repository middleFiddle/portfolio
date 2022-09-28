import Head from "next/head"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { allPosts } from "contentlayer/generated"
import Link from "next/link"
import ProjectCard from "../components/ProjectCard"
import TitleCard from "../components/TitleCard"
import CallToAction from "../components/CallToAction"

export async function getStaticProps() {
  const posts = allPosts

  return {
    props: {
      posts,
    },
  }
}

const titles = [
  "Intro",
  "Tell Me More",
  "Interview Questions",
  "Personal History",
  "I'm Complicated",
  "Atlanta Violins Project",
]

export default function Home({ posts }) {
  const getText = (t) => {
    return posts.find((p) => p.title == t)
  }

  const readMe = (t) => {
    return (
      <div
        id={t}
        key={getText(t).id}
        dangerouslySetInnerHTML={{ __html: getText(t).body.html }}
        S
      ></div>
    )
  }

  return (
    <div className="bg-slate-900 min-h-screen ">
      <Head>
        <title>Ryan Gregory</title>
        <meta
          name="This page highlights Ryan Gregory's career in web development"
          content="I built this site with NextJS and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-around content-center p-16 align">
        <section id="intro" className="flex-col max-w-xl m-auto">
          <TitleCard></TitleCard>
          <div
            id="text-box"
            className="font-serif text-lg text-indigo-50 leading-relaxed tracking-widest"
          >
            {readMe("Intro")}
          </div>
          <CallToAction></CallToAction>
        </section>

        <section className="max-w-xl m-auto" id="Projects">
          <ProjectCard readMe={readMe("Atlanta Violins Project")}></ProjectCard>
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
