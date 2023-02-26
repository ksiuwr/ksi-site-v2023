import React from "react";
import "../styles/global.css"
import * as styles from "../styles/about.module.css"
import ArrowDown from "../../static/assets/svg/arrow_down.svg"
import { renderRichText } from 'gatsby-source-contentful/rich-text'





export default function AboutSection(props){


    return (
        <section className={styles.section_container} style={{background: props.color}}>
            <div className={styles.section_text_container}>
                <h1 className={`h1_responsive ${styles.section_title}`}>{props.title}</h1>
                <p className={`body_1 ${styles.intro_content}`}>
                    <div>{renderRichText(props.content)}</div>
                </p>
            </div>
            <span className={styles.icons_container}>
                    <>{props.image}</>
                    <ArrowDown className={styles.arrow}/>
                </span>
        </section>
    )
}
