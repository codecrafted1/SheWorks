import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Welfare from "./components/Welfare";
import Complaint from "./components/Complaint";
import Register from "./components/Register";
import Login from "./components/Login";
import Sos from "./components/Sos";
import Started from "./components/Started";
import Footer from "./components/Footer";
import Documentation from "./components/Documentation";

function App() {
  const [showWelfare, setShowWelfare] = useState(false);
  const [showComplaint, setShowComplaint] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSos, setShowSos] = useState(false);
  const [showStarted, setShowStarted] = useState(false);

  // ✅ New: logged-in user state
  const [user, setUser] = useState(null); // { name: "Khushi" }

  return (
    <Router>
      <Header
        onWelfareClick={() => setShowWelfare(true)}
        onComplaintClick={() => setShowComplaint(true)}
        onRegisterClick={() => setShowRegister(true)}
        onLoginClick={() => setShowLogin(true)}
        onSosClick={() => setShowSos(true)}
        user={user}    // pass user to header
        setUser={setUser} // allow logout
      />

      <Routes>
        <Route
          path="/"
          element={<Home onGetStarted={() => setShowStarted(true)} />}
        />
        <Route path="/docs" element={<Documentation user={user} />} />
      </Routes>

      {showStarted && (
        <Started
          onClose={() => setShowStarted(false)}
          onRegister={() => {
            setShowStarted(false);
            setShowRegister(true);
          }}
          onLogin={() => {
            setShowStarted(false);
            setShowLogin(true);
          }}
        />
      )}

      {showWelfare && <Welfare onClose={() => setShowWelfare(false)} />}
      {showComplaint && <Complaint onClose={() => setShowComplaint(false)} />}

      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          setUser={setUser} // ✅ set user after register
        />
      )}

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          setUser={setUser} // ✅ set user after login
        />
      )}

      {showSos && <Sos onClose={() => setShowSos(false)} />}

      <Footer />
    </Router>
  );
}

export default App;
