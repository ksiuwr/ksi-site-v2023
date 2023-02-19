import React from "react";
import "../../styles/global.css"
import * as styles from "../../styles/about.module.css"


export default function OrganisationStructure(){
    return (
        <section className={styles.org_structure}>
            <h1 className={`h1_responsive ${styles.org_structure_title}`}>Struktura Organizacji</h1>
            <ul className={`body_1`}>
                <li className={styles.ul_content}>
                    rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                </li>
                <li className={styles.ul_content}>
                    rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                </li>
                <li className={styles.ul_content}>
                    rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                </li>
            </ul>
        </section>
    )
}