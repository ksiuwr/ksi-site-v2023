import React from "react";
import "../../styles/global.css"
import * as styles from "../../styles/about.module.css"


export default function WhatDoWeDo(){
    return (
        <div>
            <section className={styles.wdwd}>
                <h1 className={`h1_responsive ${styles.wdwd_title}`}>
                    Co robimy
                </h1>
                <ul className={`body_1`}>
                    <li className={styles.ul_content}>
                        Eventy - Obóz ZOSIA
                    </li>
                    <li>
                        Różne Projekty
                    </li>
                </ul>
            </section>
        </div>
    )
}