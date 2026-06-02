import React from "react";
import "./Started.css";

const Started = ({ onClose, onRegister, onLogin }) => {
  return (
    <div className="started-overlay">
      <div className="started-box">
        <span className="started-close" onClick={onClose}>
          ✕
        </span>

        <h2 className="started-title">Get Started</h2>

        <p className="started-text">
          Choose how you want to continue
        </p>

        <div className="started-actions">
          <div className="action-left">
            <p className="action-text">New here?</p>
            <button
              className="started-btn primary"
              onClick={onRegister}
            >
              Register
            </button>
          </div>

          <div className="divider-vertical"></div>

          <div className="action-right">
            <p className="action-text">Already a member?</p>
            <button
              className="started-btn secondary"
              onClick={onLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;
