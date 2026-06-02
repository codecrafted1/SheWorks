import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-left">
        <span className="she">She</span>
        <span className="works">Works</span>
      </div>

      
      <div className="footer-right">
        <h4>National Women Helplines</h4>
        <p>
          <strong>1091</strong> – National Women Helpline (Women in distress)
        </p>
        <p>
          <strong>181</strong> – National Women Helpline (Domestic abuse)
        </p>
        <p>
          <strong>112</strong> – Emergency number (Police, ambulance, fire
          brigade)
        </p>
        <p>
           <strong>1098</strong> – Child Helpline 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
