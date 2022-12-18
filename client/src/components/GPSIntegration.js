import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GPSIntegration = () => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  const handleNavigate = () => {
    const { latitude, longitude } = location;
    axios.post('/api/navigate', { latitude, longitude });
  };

  return (
    <div>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      <button onClick={handleNavigate}>Navigate</button>
    </div>
  );
};

export default GPSIntegration;
