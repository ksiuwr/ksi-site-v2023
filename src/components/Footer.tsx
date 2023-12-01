import React from 'react'
import "../styles/global.css"
import * as styles from '../styles/footer.module.css'

const Footer = () => {
  const options = [
    {id: 1, name: 'Instytut Informatyki Uniwersytetu Wrocławskiego ul. Fryderyka Joliot-Curie 15,  Wrocław, Sala 24'},
    {id: 2, name: 'ksi@cs.uni.wroc.pl'},
    {id: 3, name: 'KSI'},
  ];
  return(
      <div className={styles.footer_container}>
        <ul className={styles.footer_info_list}>
          {options.map(opt => (
            <li className={styles.footer_info_element}>
              <p>{opt.name}</p>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Footer
