import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactbox">
          <h1>Contactez-moi</h1>
          <ul>
            <li className="fas fa-map-maker-alt"></li>
            <li className="fas fa-mobile-alt"></li>
            <CopyToClipboard text="0611388241">
              <span
                className="clickInput"
                onClick={() => {
                  alert("Numéro de téléphone copié !");
                }}
              >
                06.11.38.82.41
              </span>
            </CopyToClipboard>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
