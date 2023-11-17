import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from 'gatsby'
import ProjectCard from '../components/projectcard';
import '../styles/style.css'
import { getImage } from "gatsby-plugin-image";

const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

import comp_image from '../images/image.png';

// // GraphQL query to get the image data
// export const query = graphql`
//   query {
//     imImage: file(relativePath: { eq: "babcia.jpg" }) {
//       childImageSharp {
//         gatsbyImageData(
//           layout: FIXED
//           placeholder: NONE
//           formats: [AUTO, WEBP, JPG, AVIF]
//         )
//       }
//     }
//   }
// `;

const IndexPage: React.FC<PageProps> = ({ data }) => {

  // const comp_image = getImage(data.imImage);
  // const im = data?.imImage?.childImageSharp?.gatsbyImageData

  // console.log(data); // Add this line to inspect the data structure
  
  // if (!im) {
  //   console.error('Error: image not loaded.');
  // }
  
  return (
    <main style={pageStyles}>
    
        <ProjectCard 

        image={comp_image}
        title="ZOSIA" 
        text="Tajne. Nawet jakbym wiedział to bym nie powiedział. Bo ja wiem, ale nie powiem, ponieważ jest to tajne, Albo w sumie powiem. Albo nie, rozmyśliłem się. 
        Skoro jest tajne to z jakiegoś powodu. Dlatego nie powiem co to jest, nawet jakby mi oferowano milion dolarów (bo to jest tajne, nie wiem czy mówiłem)." 
        color="col3"/>

        <ProjectCard 
        
        image={comp_image}
        title="HOUR OF CODE" 
        text="Tajne. Nawet jakbym wiedział to bym nie powiedział. Bo ja wiem, ale nie powiem, ponieważ jest to tajne, Albo w sumie powiem. Albo nie, rozmyśliłem się. 
        Skoro jest tajne to z jakiegoś powodu. Dlatego nie powiem co to jest, nawet jakby mi oferowano milion dolarów (bo to jest tajne, nie wiem czy mówiłem)." 
        color="col1"/>

        <ProjectCard 

        image={comp_image}
        title="PROMOCJA INFORMATYKI " 
        text="Tajne. Nawet jakbym wiedział to bym nie powiedział. Bo ja wiem, ale nie powiem, ponieważ jest to tajne, Albo w sumie powiem. Albo nie, rozmyśliłem się. 
        Skoro jest tajne to z jakiegoś powodu. Dlatego nie powiem co to jest, nawet jakby mi oferowano milion dolarów (bo to jest tajne, nie wiem czy mówiłem)." 
        color="col2"/>
    
        <ProjectCard 

        image={comp_image}
        title="POKÓJ STUDENCKI " 
        text="Tajne. Nawet jakbym wiedział to bym nie powiedział. Bo ja wiem, ale nie powiem, ponieważ jest to tajne, Albo w sumie powiem. Albo nie, rozmyśliłem się. 
        Skoro jest tajne to z jakiegoś powodu. Dlatego nie powiem co to jest, nawet jakby mi oferowano milion dolarów (bo to jest tajne, nie wiem czy mówiłem)." 
        color="col3"/>

        <ProjectCard 

        image={comp_image}
        title="PORADNIK STUDENTA " 
        text="Tajne. Nawet jakbym wiedział to bym nie powiedział. Bo ja wiem, ale nie powiem, ponieważ jest to tajne, Albo w sumie powiem. Albo nie, rozmyśliłem się. 
        Skoro jest tajne to z jakiegoś powodu. Dlatego nie powiem co to jest, nawet jakby mi oferowano milion dolarów (bo to jest tajne, nie wiem czy mówiłem)." 
        color="col1"/>

        <ProjectCard 

        image={comp_image}
        title="PROJEKTY WEWNĘTRZNE " 
        text="Tajne. Nawet jakbym wiedział to bym nie powiedział. Bo ja wiem, ale nie powiem, ponieważ jest to tajne, Albo w sumie powiem. Albo nie, rozmyśliłem się. 
        Skoro jest tajne to z jakiegoś powodu. Dlatego nie powiem co to jest, nawet jakby mi oferowano milion dolarów (bo to jest tajne, nie wiem czy mówiłem)." 
        color="col2"/>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
