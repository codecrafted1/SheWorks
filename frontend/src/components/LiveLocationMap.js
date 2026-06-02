import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LiveLocationMap = ({ positionProp }) => {

  const [position, setPosition] = useState(
    positionProp ? [positionProp.lat, positionProp.lng] : [20.5937, 78.9629]
  );

  useEffect(() => {
    
    if (positionProp) {
      setPosition([positionProp.lat, positionProp.lng]);
      return;
    }

  
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.error("Geolocation error:", err);
        },
        { enableHighAccuracy: true }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, [positionProp]);

  return (
    <div
      className="live-location-map"
      style={{ height: "250px", width: "100%", marginTop: "12px" }}
    >
      <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {position && (
          <Marker position={position}>
            <Popup>Your Current Location</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default LiveLocationMap;
