import React, { useEffect, useState } from "react";
import "./Documentation.css";
import bgImage from "../assets/background1.jpeg";
import avatar from "../assets/image.png";

import LiveLocationOverlay from "./LiveLocationOverlay";
import Wage from "./Wage";
import Safety from "./Safety"; 

const Documentation = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [showWage, setShowWage] = useState(false);
  const [showSafety, setShowSafety] = useState(false); 

  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

 
  useEffect(() => {
    if (!showLocation) return;

    if (!navigator.geolocation) {
      setError("Geolocation not supported by browser");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
      },
      (err) => {
        setError(err.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [showLocation]);

  return (
    <div
      className="doc-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      
      <div className="doc-avatar">
        <img src={avatar} alt="User Avatar" />
      </div>

      <div className="doc-backdrop">
        <h1 className="doc-title">Documentation</h1>

        <div className="doc-grid">
          <div
            className="doc-card"
            onClick={() => setShowLocation(true)}
            style={{ cursor: "pointer" }}
          >
            <h3>Live Location Sharing</h3>
            <p>Emergency safety and SOS tracking.</p>
          </div>

          <div
            className="doc-card"
            onClick={() => setShowWage(true)}
            style={{ cursor: "pointer" }}
          >
            <h3>Wage Transparency</h3>
            <p>Daily wage records & attendance.</p>
          </div>

      
          <div
            className="doc-card"
            onClick={() => setShowSafety(true)}
            style={{ cursor: "pointer" }}
          >
            <h3>Safety Analytics</h3>
            <p>Risk zones, SOS trends & safety insights.</p>
          </div>
        </div>
      </div>

      {showLocation && (
        <LiveLocationOverlay
          onClose={() => setShowLocation(false)}
          location={location}
          error={error}
        />
      )}

      
      {showWage && <Wage onClose={() => setShowWage(false)} />}

      {showSafety && <Safety onClose={() => setShowSafety(false)} />}
    </div>
  );
};

export default Documentation;
