"use client";
import React from "react";
const containerStyle = {
  width: "400px",
  height: "400px",
};

const GoogleMapComponent: React.FC = () => {
  return (
    <div style={containerStyle}>
      <iframe
        src="https://www.google.com/maps?q=12.1760649,104.6619226&z=18&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMapComponent;
