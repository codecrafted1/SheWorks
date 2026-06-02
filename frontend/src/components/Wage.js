import React, { useEffect, useState } from "react";
import "./Complaint.css"; // uses same overlay styles

const DAILY_WAGE = 1000;

const Wage = ({ onClose }) => {
  const [name, setName] = useState("");
  const [records, setRecords] = useState([]);

  /* -------- LOAD DATA -------- */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wageRecords")) || [];
    setRecords(saved);

    fetch("/api/wages")
      .then((res) => res.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log("Backend fetch error", err));
  }, []);

  /* -------- SAVE TO LOCAL STORAGE -------- */
  useEffect(() => {
    localStorage.setItem("wageRecords", JSON.stringify(records));
  }, [records]);

  /* -------- ENTRY -------- */
  const handleEntry = () => {
    if (!name) return alert("Enter worker name");

    const newRecord = {
      id: Date.now(),
      name,
      entryTime: new Date().toLocaleTimeString(),
      outTime: "-",
      wage: DAILY_WAGE,
    };

    setRecords([...records, newRecord]);
    setName("");

    fetch("/api/wages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecord),
    }).catch(() => console.log("Error saving wage"));
  };

  /* -------- EXIT -------- */
  const handleExit = (id) => {
    const updated = records.map((rec) =>
      rec.id === id ? { ...rec, outTime: new Date().toLocaleTimeString() } : rec
    );
    setRecords(updated);

    fetch(`/api/wages/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated.find((r) => r.id === id)),
    }).catch(() => console.log("Error updating wage"));
  };

  return (
    <div className="complaint-overlay">
      <div className="complaint-modal">
        
        {/* HEADER */}
        <div className="complaint-header">
          <h2>Daily Wage Collection</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        {/* INPUT */}
        <div className="complaint-form">
          <label>
            Worker Name
            <input
              type="text"
              placeholder="Enter worker name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <div className="complaint-actions">
            <button className="submit-btn" onClick={handleEntry}>
              Entry
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div style={{ overflowX: "auto", marginTop: "30px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ color: "#cbd5f5", textAlign: "left" }}>
                <th>Name</th>
                <th>Entry</th>
                <th>Exit</th>
                <th>Wage (₹)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {records.map((rec) => (
                <tr key={rec.id} style={{ color: "#e5e7eb" }}>
                  <td>{rec.name}</td>
                  <td>{rec.entryTime}</td>
                  <td>{rec.outTime}</td>
                  <td>{rec.wage}</td>
                  <td>
                    {rec.outTime === "-" && (
                      <button
                        className="submit-btn"
                        style={{ padding: "6px 18px" }}
                        onClick={() => handleExit(rec.id)}
                      >
                        Exit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="complaint-actions" style={{ marginTop: "30px" }}>
          <button className="cancel-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wage;
