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

  const [text, setText] = useState([leaflets[0]]);
  console.log(text);
  const reveal = () => {
    console.log("clicked");
    if (text.length < posts.length) {
      setText((prev) => prev.concat([leaflets[prev.length]]));
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen flex">
      <Head>
        <title>Ryan Gregory</title>
        <meta
          name="This page highlights Ryan Gregory's career in web development"
          content="I built this site with NextJS and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container max-w-md gap-y-12 flex flex-col justify-around p-16">
        <section id="intro" className="">
          <div id="title" className="font-sans mb-4 ">
            <h1 className="text-3xl font- text-emerald-300">Ryan Gregory</h1>
            <h1 className="text-xl text-rose-300">Web Developer</h1>
            <h1 className="text-md font-light text-slate-200">Atlanta, GA</h1>
            <a
              className="text-violet-200 text-sm font-extralight   hover:text-amber-50 hover:text-md"
              href="mailto: Ryan.middleFiddle@gmail.com"
            >
              Ryan.middleFiddle@gmail.com
            </a>
          </div>
          <div
            id="text-box"
            className="font-mono text-sky-50 max-h-96 overflow-y-auto text-justify leading-snug pr-4 tracking-wide "
          >
            {text}
          </div>
          <button
            className="bg-violet-200 hover:bg-amber-50 text-slate-800"
            onClick={reveal}
          >
            Tell me more
          </button>
        </section>

        <section className="m-auto max-w-sm" id="contact">
          <h2 className="text-rose-400 italic text-3xl font-semibold font-serif">
            Recruit me!
          </h2>
          <p className="text-emerald-200 italic tracking-wide">
            If you are seeking a candidate with a collaborative mindset, strong
            web fundamentals, and a curious mind, please reach out.
          </p>
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
  );
}
