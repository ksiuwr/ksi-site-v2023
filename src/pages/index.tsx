import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from 'gatsby'
import ProjectCard from '../components/projectcard';
import MainSite from '../components/ksi-card'
import comp_image from '../images/image.png';
import '../styles/style.css';

const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = ({ data }) => {

  return (
    <main style={pageStyles}>
      <MainSite />

      <ProjectCard 
      
      image={comp_image}
      title="Kim jesteśmy" 
      text="Tajne. Nawet jakbym wiedział to bym nie powiedział. Bo ja wiem, ale nie powiem, ponieważ jest to tajne, Albo w sumie powiem. Albo nie, rozmyśliłem się. 
      Skoro jest tajne to z jakiegoś powodu. Dlatego nie powiem co to jest, nawet jakby mi oferowano milion dolarów (bo to jest tajne, nie wiem czy mówiłem)." 
      color="col1"/>

      <ProjectCard 
      
      image={comp_image}
      title="Nasze projekty" 
      text="Tajne. Nawet jakbym wiedział to bym nie powiedział. Bo ja wiem, ale nie powiem, ponieważ jest to tajne, Albo w sumie powiem. Albo nie, rozmyśliłem się. 
      Skoro jest tajne to z jakiegoś powodu. Dlatego nie powiem co to jest, nawet jakby mi oferowano milion dolarów (bo to jest tajne, nie wiem czy mówiłem)." 
      color="col2"/>
      
      <ProjectCard 
      
      image={comp_image}
      title="Członkowie koła" 
      text="Tajne. Nawet jakbym wiedział to bym nie powiedział. Bo ja wiem, ale nie powiem, ponieważ jest to tajne, Albo w sumie powiem. Albo nie, rozmyśliłem się. 
      Skoro jest tajne to z jakiegoś powodu. Dlatego nie powiem co to jest, nawet jakby mi oferowano milion dolarów (bo to jest tajne, nie wiem czy mówiłem)." 
      color="col3"/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
