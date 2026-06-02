import React, { useEffect, useRef } from "react";
import "./FaceScanner.css";

const FaceScanner = ({ onClose }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  let streamRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch (err) {
        alert("Camera access denied");
      }
    };

    startCamera();

    return () => {
      
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const captureFace = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    alert("Face captured successfully");

    
    onClose(true);
  };

  const cancelScan = () => {
    
    onClose(false);
  };

  return (
    <div className="face-overlay">
      <div className="face-modal">
        <div className="face-header">
          <h3>Face Verification</h3>
          <button className="close-btn" onClick={cancelScan}>✕</button>
        </div>

        <video ref={videoRef} autoPlay playsInline className="face-video" />
        <canvas ref={canvasRef} style={{ display: "none" }} />

        <button className="capture-btn" onClick={captureFace}>
          Capture Face
        </button>
      </div>
    </div>
  );
};

export default FaceScanner;
