import Image from "next/image"
import Link from "next/link"

const ProjectCard = ({ id, title, img, url, gitHub, description }) => {
    return (
        <div
            id={id}
            className="carousel-item w-full card card-bordered border-b-sky-300 border-l-indigo-400 border-opacity-50 border-l-1 border-t-0 border bg-slate-800 bg-opacity-50 text-sky-200 min-w-lg max-w-xl rounded-md"
        >
            <Image
                src={img.src}
                height={img.height}
                width={img.width}
                layout="responsive"
                alt="Picture This"
            ></Image>
            <div className="card-body ">
                <h2 className="card-title text-emerald-300 text-opacity-90 font-normal ">
                    {title}
                </h2>
                <p className="m-0 p-0">{description}</p>
                <div className="card-actions">
                    <button className="btn btn-outline bg-slate-700 text-rose-300 m-0">
                        <a href={url}>See a live demo</a>
                    </button>

                    <button className="btn btn-outline bg-slate-700 text-rose-300 m-0">
                        <a href={gitHub}>See the source code</a>
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
