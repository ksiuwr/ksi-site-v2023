import React from "react";
import logoKSI from "../images/logoKSI.svg";
import "../styles/ksi-styles.css";

const KsiCard = () => (
  <div className="ksi-card">
    <div className="ksi-container">
      <h2 className="ksi-title">Koło Studentów Informatyki</h2>
      <hr className="ksi-divider" />
      <p className="ksi-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        itaque voluptatem obcaecati autem dolorum sint rerum molestias. Magnam
        earum distinctio accusantium facere velit vitae consequuntur tempora
        nihil inventore, totam est?
      </p>
    </div>
    <img className="ksi-image" src={logoKSI} alt="logoKsi" />
  </div>
);

export default KsiCard;
