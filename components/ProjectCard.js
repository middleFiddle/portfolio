import Image from "next/image"
import React from "react"
import IconLink from "./IconLink"
import TextBox from "./TextBox"

const ProjectCard = () => {
  return (
    <div className="bg-gray-200">
      <Image alt="Picture This"></Image>
      <TextBox></TextBox>
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
