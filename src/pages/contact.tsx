import * as React from 'react'
import "../styles/global.css"
import * as styles from "../styles/contact.module.css"
import Phone from "../images/svg/phone.svg"
import Logo from "../images/svg/logoKSI.svg"
const ContactPage = () => {

    const options =[
        {id: 1, name: "Tel", logo: <img src={Phone} alt="Phone Icon" />},
        {id: 2, name: "Mail", logo: <img src={Phone} alt="Phone Icon" />},
        {id: 3, name: "Instagram", logo: <img src={Phone} alt="Phone Icon" />},
        {id: 4, name: "Github", logo: <img src={Phone} alt="Phone Icon" />},
        {id: 5, name: "Facebook", logo: <img src={Phone} alt="Phone Icon" />}
    ]

    // const data = (graphql`
    // query MyQuery {
    //       contentfulSectionFormatting(title: {eq: "O nas"}) {
    //         id
    //         title
    //         content {
    //           raw
    //         }
    //       }
    //     }
    //   `)
    //
    // console.log(data)

    return (
        <main className={styles.page}>
            <div className={`${styles.container}`}>
                <h1 className={`h1_responsive ${styles.header_section}`}>Skontaktuj się z nami</h1>
                <div className={styles.inner_container}>

                    <div className={styles.list_paragraph}>
                        <p className={`body_1 ${styles.contact_paragraph}`}>Instytut Informatyki Uniwersytetu Wrocławskiego
                            ul. Fryderyka Joliot-Curie 15,  Wrocław, Sala 24</p>
                        <ul className={styles.contact_ul}>
                            {options.map(opt => (
                                <li key={opt.id}>
                                    <div className={styles.listed_item}>
                                        {opt.logo}
                                        <p className={"body_1"}>{opt.name}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.logo}>
                        <img src={Logo} alt="Phone Icon" />
                        <div className={styles.ray}></div>
                    </div>
                </div>


            </div>
        </main>
    )
}

// Step 3: Export your component
export const Head = () => <title>Contact Us</title>
export default ContactPage