import React, { useState } from "react";
import "./Complaint.css";
import API from "../api"; 

const Complaint = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    issue: "",
  });
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/complaints", form); 

      if (res.data.success) {
        alert("✅ Complaint submitted successfully!");
        setForm({ name: "", age: "", issue: "" }); 
        onClose();
      }
    } catch (error) {
      alert(
        error.response?.data?.message || "❌ Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="complaint-overlay">
      <div className="complaint-modal">
        {/* Header */}
        <div className="complaint-header">
          <h2>Register a Complaint</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        
        <form onSubmit={handleSubmit} className="complaint-form">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Age
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Issue Description
            <textarea
              name="issue"
              rows="5"
              value={form.issue}
              onChange={handleChange}
              required
            />
          </label>

          {/* Buttons */}
          <div className="complaint-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Complaint;
