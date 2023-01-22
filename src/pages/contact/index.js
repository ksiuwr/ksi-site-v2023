import React from "react";
import "../../styles/global.css"
import * as styles from "../../styles/contact.module.css"
import Logo from "../../../static/assets/svg/logo.svg"
import Phone from "../../../static/assets/svg/phone.svg"


export default function Index(){

    const options =[
        {id: 0, name: "Adres", src: "/assets/phone.svg"},
        {id: 1, name: "Tel", src: "/assets/phone.svg"},
        {id: 2, name: "Mail", src: "/assets/phone.svg"},
        {id: 3, name: "Instagram", src: "/assets/phone.svg"},
        {id: 4, name: "Github", src: "/assets/phone.svg"},
        {id: 5, name: "Facebook", src: "/assets/phone.svg"}
    ]

    return (
        <div className={styles.page}>
            <div className={`${styles.container}`}>
                <h1 className={`h1_responsive ${styles.header_section}`}>Skontaktuj się</h1>
                {/*<div className={styles.line_subject}></div>*/}
                <ul className={styles.contact_ul}>
                    {options.map(opt => (
                        <li className={styles.listed_elem} key={opt.id}>
                            <Phone/>
                            <p className={"body_1"}>{opt.name}</p>
                        </li>
                    ))}
                </ul>
                <div className={styles.logo}>
                    <Logo/>
                </div>
                <div className={styles.header_section}></div>
            </div>
        </div>

    )
}