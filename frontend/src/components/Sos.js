import React from "react";
import "./Sos.css";

const Sos = ({ onClose }) => {

  const handleCall = () => {
    window.location.href = "tel:112";
  };

  const handleLiveLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        alert(`Live Location:\nLat: ${latitude}\nLng: ${longitude}`);
        
      });
    } else {
      alert("Geolocation not supported");
    }
  };

  return (
    <div className="sos-overlay">
      <div className="sos-box">
        <span className="close-sos" onClick={onClose}>✕</span>

        <h1 className="sos-title">🚨 SOS Emergency</h1>

        <p className="sos-text">
          If you are in danger, please use the options below immediately:
        </p>

        <div className="sos-numbers">
          <p><strong>112</strong> – Emergency (Police / Ambulance)</p>
          <p><strong>1091</strong> – Women Helpline</p>
          <p><strong>181</strong> – Domestic Violence Support</p>
        </div>
        
        <div className="sos-btn-group">
          <button className="sos-btn" onClick={handleCall}>
            📞 Call for Help
          </button>

          <button className="sos-btn location-btn" onClick={handleLiveLocation}>
            📍 Share Live Location
          </button>
        </div>

      </div>
    </div>
  );
};

export default Sos;
