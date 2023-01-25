import React from 'react'
import "../styles/global.css"
import * as styles from "../styles/footer.module.css"

export default function Footer(){
    return(
        <div className={styles.footer_container}>
          <ul className={styles.footer_info_list}>
            <li className={styles.footer_info_element}>
              <p>Instytut Informatyki Uniwersytetu Wrocławskiego ul. Fryderyka Joliot-Curie 15,  Wrocław, Sala 24</p>
            </li>
            <li className={styles.footer_info_element}>
              <p>ksi@cs.uni.wroc.pl</p>
            </li>
            <li className={styles.footer_info_element}>
              <p>KSI</p>
            </li>
          </ul>
        </div>
    )
}