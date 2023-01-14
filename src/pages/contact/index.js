import React from "react";
import "../../styles/global.css"
import * as styles from "../../styles/contact.module.css"


export default function Index(){

    const options =[
        {id: 0, name: "Adres", src: "/assets/home.svg"},
        {id: 1, name: "Tel", src: "/assets/home.svg"},
        {id: 2, name: "Mail", src: "/assets/home.svg"},
        {id: 3, name: "Instagram", src: "/assets/home.svg"},
        {id: 4, name: "Github", src: "/assets/home.svg"},
        {id: 5, name: "Facebook", src: "/assets/home.svg"}
    ]

    return (
        <div className={styles.page}>
            <div className={`${styles.container}`}>
                <h1 className={`mobile_header ${styles.header_section}`}>Skontaktuj się</h1>
                {/*<div className={styles.line_subject}></div>*/}
                <ul>
                    {options.map(opt => (
                        <li className={styles.listed_elem} key={opt.id}>
                            <img width={"48px"} src={opt.src} alt={"sub_icon"}/>
                            <p className={"body_1"}>{opt.name}</p>
                        </li>
                    ))}
                </ul>
                <div className={styles.logo}>
                    <img src={"/assets/img.png"}  alt={"logo"}/>
                </div>
                <div className={styles.header_section}></div>
            </div>
        </div>

    )
}