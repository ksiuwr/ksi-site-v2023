import React from 'react'
import { Link } from 'gatsby'
import "../styles/global.css"
import * as styles from '../styles/header.module.css'

//NOTE: tu trzeba będzie zmienić dokąd prowadzą linki

export default function Header(){
  return (
    <div className={styles.header_container}>
      <nav className={styles.main_nav}>
        <ul className={styles.nav_left}>
          <li>
            <Link>KSI UWr</Link>
          </li>
        </ul>
        <ul className={styles.nav_right}>
          <li>
            <Link>Członkowie</Link>
          </li>
          <li>
            <Link>Projekty</Link>
          </li>
          <li>
            <Link>Partnerzy</Link>
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