import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import ProjectCard from "../components/projectcard";
import "../styles/style.css";
import { getImage } from "gatsby-plugin-image";

const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

import comp_image from "../images/image.png";

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
const projects = [
  {
    title: "ZOSIA",
    text: "Tajne. Nawet jakbym wiedział to bym nie powiedział. Bo ja wiem, ale nie powiem, ponieważ jest to tajne, Albo w sumie powiem. Albo nie, rozmyśliłem się. Skoro jest tajne to z jakiegoś powodu. Dlatego nie powiem co to jest, nawet jakby mi oferowano milion dolarów (bo to jest tajne, nie wiem czy mówiłem).",
    image: comp_image,
  },
  {
    title: "HOUR OF CODE",
    text: "Tajne. Nawet jakbym wiedział to bym nie powiedział. Bo ja wiem, ale nie powiem, ponieważ jest to tajne, Albo w sumie powiem. Albo nie, rozmyśliłem się. Skoro jest tajne to z jakiegoś powodu. Dlatego nie powiem co to jest, nawet jakby mi oferowano milion dolarów (bo to jest tajne, nie wiem czy mówiłem).",
    image: comp_image,
  },
  {
    title: "PROMOCJA INFORMATYKI",
    text: "Tajne. Nawet jakbym wiedział to bym nie powiedział. Bo ja wiem, ale nie powiem, ponieważ jest to tajne, Albo w sumie powiem. Albo nie, rozmyśliłem się. Skoro jest tajne to z jakiegoś powodu. Dlatego nie powiem co to jest, nawet jakby mi oferowano milion dolarów (bo to jest tajne, nie wiem czy mówiłem).",
    image: comp_image,
  },
  {
    title: "PORADNIK STUDENTA",
    text: "Tajne. Nawet jakbym wiedział to bym nie powiedział. Bo ja wiem, ale nie powiem, ponieważ jest to tajne, Albo w sumie powiem. Albo nie, rozmyśliłem się. Skoro jest tajne to z jakiegoś powodu. Dlatego nie powiem co to jest, nawet jakby mi oferowano milion dolarów (bo to jest tajne, nie wiem czy mówiłem).",
    image: comp_image,
  },
  {
    title: "PROJEKTY WEWNĘTRZNE",
    text: "Tajne. Nawet jakbym wiedział to bym nie powiedział. Bo ja wiem, ale nie powiem, ponieważ jest to tajne, Albo w sumie powiem. Albo nie, rozmyśliłem się. Skoro jest tajne to z jakiegoś powodu. Dlatego nie powiem co to jest, nawet jakby mi oferowano milion dolarów (bo to jest tajne, nie wiem czy mówiłem).",
    image: comp_image,
  }
]

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <main style={pageStyles}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          text={project.text}
        />
      ))}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Nasze Projekty</title>;
