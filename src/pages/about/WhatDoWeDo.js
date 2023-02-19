import React from "react";
import "../../styles/global.css"
import * as styles from "../../styles/about.module.css"


export default function WhatDoWeDo(){

    return (
        <div>
            <section className={styles.wdwd}>
                <h1 className={`h1_responsive ${styles.wdwd_title}`}>
                    Co Robimy
                </h1>
                <div className={styles.wdw_content}>
                    <ul className={`body_1`}>
                        <li className={styles.ul_content}>
                            Zosia
                        </li>
                        <li className={styles.ul_content}>
                            Projekty
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}