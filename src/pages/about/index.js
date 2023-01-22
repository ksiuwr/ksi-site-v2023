import React from "react";
import "../../styles/global.css"
import * as styles from "../../styles/about.module.css"
import Intro from "./Intro";
import OrganisationStructure from "./OrganisationStructure";
import WhatDoWeDo from "./WhatDoWeDo";

export default function Index(){
    return (
        <div className={styles.page}>
            <Intro/>
            <OrganisationStructure/>
            <WhatDoWeDo/>
        </div>
    )
}