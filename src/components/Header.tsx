import React from 'react'
import { Link } from 'gatsby'
import "../styles/global.css"
const styles = require('../styles/header.module.css')

//NOTE: link destinations will have to be changed
const Header = () =>{
  const options = [
    {id: 1, name: 'Członkowie', destination:''},
    {id: 2, name: 'Projekty',   destination:''},
    {id: 3, name: 'Partnerzy',  destination:''},
    {id: 4, name: 'ZOSIA',      destination:''},
    {id: 5, name: 'Kontakt',    destination:''},
  ];
  return (
    <div className={styles.header_container}>
      <nav className={styles.main_nav}>
        <ul className={styles.nav_left}>
          <li>
            <Link to='/'>KSI UWr</Link>
          </li>
        </ul>
        <ul className={styles.nav_right}>
          {options.map(opt => (
            <li>
              <Link to={opt.destination}>{opt.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
