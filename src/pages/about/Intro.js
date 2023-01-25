import React from "react";
import "../../styles/global.css"
import * as styles from "../../styles/about.module.css"
import Logo from "../../../static/assets/svg/logo.svg"
import ArrowDown from "../../../static/assets/svg/arrow_down.svg"

export default function Intro(){
    return (
        <section className={styles.intro}>
            <h1 className={`h1_responsive ${styles.intro_title}`}>O nas</h1>
            <span className={styles.icons_container}>
                    <Logo className={styles.icon}/>
                    <ArrowDown className={styles.arrow}/>
                </span>
            <p className={`body_1 ${styles.intro_content}`}>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciun
            </p>
        </section>
    )
}