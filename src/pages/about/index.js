import React from "react";
import "../../styles/global.css"
import * as styles from "../../styles/about.module.css"
import AboutSection from "../../components/AboutSection";
import {graphql, useStaticQuery} from "gatsby";

export default function Index(){

    const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulSectionFormatting {
        nodes {
          content {
            raw
          }
          id
          title
        }
      }
    }
  `)

    const sections = data.allContentfulSectionFormatting.nodes
    const colors =   ['#001A2D', '#01223A', '#41596B']

    return (
        <div className={styles.page}>
            {sections.map((section, index) => {
                return <AboutSection key={index} title={sections[index].title} content={sections[index].content} color={colors[index % 3]}/>
            })}
        </div>
    )
}