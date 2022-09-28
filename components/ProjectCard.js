import Image from "next/image"
import React from "react"
import IconLink from "./IconLink"
import TextBox from "./TextBox"

const ProjectCard = ({ readMe }) => {
  return (
    <div className="bg-indigo-50 p-2 max-w-sm rounded-sm">
      <div className=" p-2 pb-0 bg-pink-50 max-w-sm w-auto">
        <Image
          src="/atlVlns.jpg"
          height={601}
          width={801}
          layout="responsive"
          alt="Picture This"
        ></Image>
      </div>
      <div className="p-2 bg-pink-50 max-w-sm ">
        <TextBox readMe={readMe}></TextBox>
      </div>
      <IconLink></IconLink>
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
