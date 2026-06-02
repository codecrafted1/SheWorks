import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import FaceScanner from "./FaceScanner";

const Login = ({ onClose }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showFaceScan, setShowFaceScan] = useState(false);
  const [faceVerified, setFaceVerified] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!faceVerified) {
      alert("Please verify your face first");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          faceVerified: true, // face verified
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      alert("Logged in successfully");

      onClose();        
      navigate("/docs"); 
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">
        <div className="login-header">
          <h2>Login</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
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
            Email ID
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <div className="face-section">
            {faceVerified ? (
              <p className="verified-text">✔ Face Captured</p>
            ) : (
              <button
                type="button"
                className="face-btn"
                onClick={() => setShowFaceScan(true)}
              >
                Verify Face
              </button>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
      </div>

      {showFaceScan && (
  <FaceScanner
    onClose={(verified) => {
      setShowFaceScan(false);   // hide overlay
      setFaceVerified(verified); // true if captured, false if cancelled
    }}
  />
)}

    </div>
  );
};

export default Login;
