import React from "react";
import "./Complaint.css"; 

const Safety = ({ onClose }) => {
  return (
    <div className="complaint-overlay">
      <div className="complaint-modal">

        <div className="complaint-header">
          <h2>Safety Analytics</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          
          <div
            style={{
              background: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
            }}
          >
            <h4 style={{ color: "#c77dff", marginBottom: "8px" }}>
              High-Risk Zones
            </h4>
            <ul style={{ color: "#cbd5f5", fontSize: "14px", paddingLeft: "18px" }}>
              <li>Sector 18 (After 8 PM)</li>
              <li>Industrial Area Phase 2</li>
            </ul>
          </div>

          
          <div
            style={{
              background: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
            }}
          >
            <h4 style={{ color: "#c77dff", marginBottom: "8px" }}>
              Time-Based Risk
            </h4>
            <ul style={{ color: "#cbd5f5", fontSize: "14px", paddingLeft: "18px" }}>
              <li>11 PM – 2 AM</li>
              <li>4 AM – 6 AM</li>
            </ul>
          </div>

          
          <div
            style={{
              background: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
              textAlign: "center",
            }}
          >
            <h4 style={{ color: "#c77dff", marginBottom: "6px" }}>
              SOS Activity
            </h4>
            <p
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#22c55e",
                margin: "6px 0",
              }}
            >
              1
            </p>
            <span style={{ color: "#94a3b8", fontSize: "13px" }}>
              Alerts this week
            </span>
          </div>

          
          <div
            style={{
              background: "#020617",
              border: "1px solid #1e293b",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
            }}
          >
            <h4 style={{ color: "#c77dff", marginBottom: "8px" }}>
              Safety Insights
            </h4>
            <ul style={{ color: "#cbd5f5", fontSize: "14px", paddingLeft: "18px" }}>
              <li>78% gigs completed safely</li>
              <li>Verified clients reduce incidents</li>
              <li>Preventive alerts active</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safety;
