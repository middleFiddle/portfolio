import ProjectCard from "../components/ProjectCard"

const projects = () => {
  return (
    <div
      className="container
     max-w-xl mx-auto mt-16 transition duration-1000 group "
    >
      <h2 className="text-rose-300 text-3xl leading-loose">Projects</h2>
      <div className="carousel">
        <ProjectCard id="project1" />
        <ProjectCard id="project2" />
        <ProjectCard id="project3" />
        <ProjectCard id="project4" />
      </div>
      <div className="flex justify-center w-full py-2 gap-2 [overflow-anchor-none]">
        <a href="#project1" className="btn btn-xs">
          1
        </a>
        <a href="#project2" className="btn btn-xs">
          2
        </a>
        <a href="#project3" className="btn btn-xs">
          3
        </a>
        <a href="#project4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  )
}

export default projects
