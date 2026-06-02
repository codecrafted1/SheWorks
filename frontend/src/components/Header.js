import React from "react";
import "./Header.css";

const Header = ({
  onWelfareClick,
  onComplaintClick,
  onRegisterClick,
  onLoginClick,
  onSosClick,
}) => {
 

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <header className="header">
   
      <div className="logo" onClick={goHome}>
        <span className="she">She</span>
        <span className="works">Works</span>
      </div>
      <nav className="nav">
        <span className="nav-link" onClick={onWelfareClick}>
          Welfare Schemes
        </span>

        <span className="nav-link" onClick={onComplaintClick}>
          Complaints
        </span>
        <span className="sos-header-btn" onClick={onSosClick}>
          SOS
        </span>
      </nav>
    </header>
  );
};

export default Header;
