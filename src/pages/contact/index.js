import React from "react";
import "../../styles/global.css"
import * as styles from "../../styles/contact.module.css"
import Logo from "../../../static/assets/svg/logo.svg"
import Phone from "../../../static/assets/svg/phone.svg"


export default function Index(){

    const options =[
        {id: 0, name: "Adres", logo: <Phone/>},
        {id: 1, name: "Tel", logo: <Phone/>},
        {id: 2, name: "Mail", logo: <Phone/>},
        {id: 3, name: "Instagram", logo: <Phone/>},
        {id: 4, name: "Github", logo: <Phone/>},
        {id: 5, name: "Facebook", logo: <Phone/>}
    ]

    return (
        <div className={styles.page}>
            <div className={`${styles.container}`}>
                <h1 className={`h1_responsive ${styles.header_section}`}>Skontaktuj się</h1>
                <div className={styles.ul_and_logo}>
                    <ul className={styles.contact_ul}>
                        {options.map(opt => (
                            <li className={styles.listed_elem} key={opt.id}>
                                {opt.logo}
                                <p className={"body_1"}>{opt.name}</p>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.logo_container}>
                        <div className={styles.logo}>
                            <Logo/>
                        </div>
                    </div>

                </div>
                <div className={styles.header_section}></div>
            </div>
        </div>

    )
}