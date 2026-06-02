import React from "react";
import "./Welfare.css";

const Welfare = ({ onClose }) => {
  return (
    <div className="welfare-overlay">
      <div className="welfare-modal">
        {/* Header */}
        <div className="welfare-header">
          <h2>Women Welfare Schemes</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

    
        <ul className="scheme-list">
          <li>
            <strong>1. Pradhan Mantri Matru Vandana Yojana (PMMVY)</strong>
            <p>A maternity benefit scheme providing cash assistance to pregnant & lactating women, also providing ₹5,000 in 3 installments for first birth</p>
          </li>

          <li>
            <strong>2. The Indira Gandhi National Widow Pension Scheme</strong>
            <p>rovides financial aid to widows aged 40-79 (₹300/month) and 80+ (₹500/month) from Below Poverty Line (BPL) familie</p>
          </li>

          <li>
            <strong>3. UJJAWAL scheme</strong>
            <p>This scheme was launched to combat trafficking and to locate , care for and reintegrate servivors who have been sexually explioted.</p>
          </li>

          <li>
            <strong>4. E-Shram Portal</strong>
            <p>A national database for unorganized workers, including gig workers, issuing a Universal Account Number (UAN) for accessing portable social security schemes..</p>
          </li>

          <li>
            <strong>5. Code on Social Security,2020</strong>
            <p>egally recognizes gig and platform workers, extending social security to cover life/disability, health/maternity, old age, and accident insurance.</p>
          </li>
          
          <li>
            <strong>6. Women Helpline scheme</strong>
            <p>This scheme intend to offer 24*7 emergency to women who have suffered abuse in either public or private settings.
            </p>
          </li>
        </ul>

        {/* Footer */}
        
      </div>
    </div>
  );
};

export default Welfare;
