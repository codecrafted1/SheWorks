import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import FaceScanner from "./FaceScanner";

const Register = ({ onClose }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    work: "",
    password: "",
    confirmPassword: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyNumber: "",
  });

  const [showFaceScan, setShowFaceScan] = useState(false);
  const [faceVerified, setFaceVerified] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!faceVerified) {
      alert("Please verify your face first");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          work: form.work,
          password: form.password,
          emergencyName: form.emergencyName,
          emergencyRelation: form.emergencyRelation,
          emergencyNumber: form.emergencyNumber,
          faceVerified: true, // send faceVerified to backend
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("Registered successfully");

      navigate("/docs"); // ✅ redirect first
      onClose();         // then close modal
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className="register-overlay">
      <div className="register-modal">
        <div className="register-header">
          <h2>Create Account</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>

          <label>
            Email ID
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>

          <label>
            Work / Occupation
            <input type="text" name="work" value={form.work} onChange={handleChange} required />
          </label>

          <label>
            Create Password
            <input type="password" name="password" value={form.password} onChange={handleChange} required />
          </label>

          <label>
            Confirm Password
            <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
          </label>

          <label>
            Emergency Contact Name
            <input type="text" name="emergencyName" value={form.emergencyName} onChange={handleChange} required />
          </label>

          <label>
            Relation
            <input type="text" name="emergencyRelation" value={form.emergencyRelation} onChange={handleChange} required />
          </label>

          <label>
            Emergency Contact Number
            <input type="tel" name="emergencyNumber" value={form.emergencyNumber} onChange={handleChange} required />
          </label>

          <div className="face-section">
            {faceVerified ? (
              <p className="verified-text">✔ Face Captured</p>
            ) : (
              <button type="button" className="face-btn" onClick={() => setShowFaceScan(true)}>
                Verify Face
              </button>
            )}
          </div>

          <div className="register-actions">
            <button type="submit" className="submit-btn">Register</button>
          </div>
        </form>
      </div>

      {showFaceScan && (
  <FaceScanner
    onClose={(verified) => {
      setShowFaceScan(false);   
      setFaceVerified(verified); 
    }}
  />
)}

    </div>
  );
};

export default Register;
