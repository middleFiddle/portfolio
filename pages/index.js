import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { allPosts } from "contentlayer/generated";

export async function getStaticProps() {
  const posts = allPosts;

  return {
    props: {
      posts,
    },
  };
}

const titles = [
  "Intro",
  "Tell Me More",
  "Interview Questions",
  "Personal History",
  "I'm Complicated",
];

export default function Home({ posts }) {
  const reveal = () => {
    console.log("clicked");
  };

  const getText = (t) => {
    return posts.find((p) => p.title == t);
  };

  console.log(getText("Intro"));

  const leaflets = titles.map((t) => {
    return (
      <div
        id={t}
        key={getText(t).id}
        dangerouslySetInnerHTML={{ __html: getText(t).body.html }}
      ></div>
    );
  });

  return (
    <div className="bg-slate-800 min-h-screen flex flex-col">
      <Head>
        <title>Ryan Gregory</title>
        <meta
          name="This page highlights Ryan Gregory's career in web development"
          content="I built this site with NextJS and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section id="intro" className="flex flex-col justify-evenly p-16">
        <div id="title" className="font-sans mb-4 ">
          <h1 className="text-3xl font-extralight text-emerald-100">
            Ryan Gregory
          </h1>
          <h1 className="text-xl font-thin text-rose-300">Web Developer</h1>
          <h1 className="text-md text-slate-300">Atlanta, GA</h1>
          <a
            className="text-violet-200 text-sm  hover:text-amber-50 hover:text-md"
            href="mailto: Ryan.middleFiddle@gmail.com"
          >
            Ryan.middleFiddle@gmail.com
          </a>
        </div>
        <div
          id="text-box"
          className="font-mono text-sky-100 flex flex-col max-w-sm max-h-96 overflow-y-scroll text-justify leading-snug pr-4 p"
        >
          {leaflets}
        </div>
        <button
          className="bg-violet-200 hover:bg-amber-50 text-slate-800"
          onClick={reveal}
        >
          Tell me more
        </button>
      </section>

      <section id="contact">
        <h2>Recruit me!</h2>
        <p>
          I am currently seeking my first full-time front-end or full stack
          engineering role. If you are seeking candidate with a collaborative
          mindset, strong web fundamentals, and a curious, inventive mind,
          please reach out.
        </p>
      </section>

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
  );
}
