import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { allPosts } from "contentlayer/generated";
console.log(allPosts[0].body.html);

export async function getStaticProps() {
  const [first, second] = [allPosts[0].body.html, allPosts[1].body.html];

  return {
    props: {
      first,
      second,
    },
  };
}

export default function Home({ first, second }) {
  const [bookmark, setBookmark] = useState(0);
  const reveal = () => {
    setBookmark((prev) => prev + 1);
  };

  return (
    <div className="bg-slate-800 min-h-screen">
      <Head>
        <title>Ryan Gregory</title>
        <meta
          name="This page highlights Ryan Gregory's career in web development"
          content="I built this site with NextJS and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-evenly p-16">
        <div className="font-sans mb-4 ">
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
        <div className="font-mono text-sky-100 flex flex-col max-w-sm overflow-y-scroll text-justify leading-snug pr-4">
          {/*           <p className="pb-4 ">

          </p>

          <p className="pb-4">

          </p>

          <p className="pb-4">
            I also teach people how to play music, most often on the violin, and
            I play viola with the Atlanta Opera.
          </p> */}
          <div dangerouslySetInnerHTML={{ __html: first }}></div>
          {bookmark > 0 && (
            <div dangerouslySetInnerHTML={{ __html: second }}></div>
          )}
          <button
            className="bg-violet-200 hover:bg-amber-50 text-slate-800"
            onClick={reveal}
          >
            Tell me more
          </button>
        </div>
      </main>

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
