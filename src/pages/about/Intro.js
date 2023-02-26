import React from "react";
import "../../styles/global.css"
import * as styles from "../../styles/about.module.css"
import Logo from "../../../static/assets/svg/logo.svg"
import ArrowDown from "../../../static/assets/svg/arrow_down.svg"
import {graphql, useStaticQuery} from "gatsby";
import { renderRichText } from 'gatsby-source-contentful/rich-text'





export default function Intro(){


    const data = useStaticQuery(graphql`
    query MyQuery {
      contentfulSectionFormatting(title: {eq: "O nas"}) {
        id
        title
        content {
          raw
        }
      }
    }
  `)


    return (
        <section className={styles.intro}>
            <h1 className={`h1_responsive ${styles.intro_title}`}>{data.contentfulSectionFormatting.title}</h1>
            <span className={styles.icons_container}>
                <Logo className={styles.icon}/>
                <ArrowDown className={styles.arrow}/>
            </span>
            <p className={`body_1 ${styles.intro_content}`}>
                <div>{renderRichText(data.contentfulSectionFormatting.content)}</div>
                {/*{data.contentfulSectionFormatting.content}*/}
            </p>
        </section>
    )
}
