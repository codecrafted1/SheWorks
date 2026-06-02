import React, { useEffect, useState } from "react";
import LiveLocationMap from "./LiveLocationMap";
import "./Complaint.css"; 

const LiveLocationOverlay = ({ onClose }) => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

  
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported by your browser");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        });
      },
      (err) => setError(err.message),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div className="complaint-overlay">
      <div className="complaint-modal">
        
      
        <div className="complaint-header">
          <h2>📍 Live Location</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        
        {error && (
          <p style={{ color: "#ef4444", marginBottom: "10px" }}>
            {error}
          </p>
        )}
        
        <div className="live-location-map">
          <LiveLocationMap position={location} />
        </div>

        {location ? (
          <div
            className="location-box"
            style={{ marginTop: "20px" }}
          >
            <p><b>Latitude:</b> {location.lat}</p>
            <p><b>Longitude:</b> {location.lng}</p>
            <p><b>Accuracy:</b> ±{Math.round(location.accuracy)} meters</p>

            <a
              href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </div>
        ) : (
          <p style={{ color: "#cbd5f5" }}>Fetching live location…</p>
        )}

        
        <div className="complaint-actions">
          <button className="cancel-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveLocationOverlay;
