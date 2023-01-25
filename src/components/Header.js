import React from 'react'
import { Link } from 'gatsby'
import "../styles/global.css"
import * as styles from "../styles/header.component.css"

export default function Header(){
    return(
        <div className={styles.header_container}>
          <nav className={styles.main_nav}>
            <ul className={styles.nav_left}>
              <li>
                <Link to='/ksi-site-v2023/'>KSI UWr</Link>
              </li>
            </ul>
            <ul className={styles.nav_right}>
              <li>
                <Link to='/ksi-site-v2023/'>Strona Główna</Link>
              </li>
              <li>
                <Link>O nas</Link>
              </li>
              <li>
                <Link>Członkowie</Link>
              </li>
              <li>
                <Link>Projekty</Link>
              </li>
              <li>
                <Link>ZOSIA</Link>
              </li>
              <li>
                <Link>Kontakt</Link>
              </li>
            </ul>
          </nav>
        </div>
    )
}