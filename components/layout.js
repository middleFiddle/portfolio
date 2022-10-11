import Navbar from "./Navbar"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Head>
        <title>Ryan Gregory</title>
        <meta
          name="This page highlights Ryan Gregory's career in web development"
          content="I built this site with NextJS and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
