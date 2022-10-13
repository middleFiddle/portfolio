import Image from "next/image"

const ProjectCard = ({ id }) => {
  return (
    <div
      id={id}
      className="carousel-item w-full card card-bordered border-b-sky-300 border-l-indigo-400 border-opacity-50 border-l-1 border-t-0 border bg-slate-800 bg-opacity-50 text-sky-200 min-w-lg max-w-xl rounded-md"
    >
      <Image
        src="/atlVlns.jpg"
        height={601}
        width={801}
        layout="responsive"
        alt="Picture This"
      ></Image>
      <div className="card-body ">
        <h2 className="card-title text-emerald-300 text-opacity-90 font-normal ">
          Atlanta Violins
        </h2>
        <p>
          This is a full stack app built using Typescript, React, and MySQL with
          NextJS.
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-slate-700 text-rose-300">
            See a live demo
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

/*

Image link to project page
README Preview
READMORE link to project page
GITHUB Icon  link to Repo

*/
