import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import MapComponent from './MapComponent';
import SearchComponent from './SearchComponent';
import axios from 'axios'; // Fetch API data from backend more reliably


function App() {
  const [mapCenter, setMapCenter] = useState<[number, number]>([37.3387, -121.8853]); // Default position (San Jose, CA)
  const [locationName, setLocationName] = useState<string>('San Jose, CA');

  const [snapLocations, setSnapLocations] = useState<any[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  //   fetch("http://localhost:5050/api/snap")
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("Fetched SNAP locations:", data);
  //       setSnapLocations(data);
  //     })
  //     .catch(error =>
  //       console.error("Error fetching SNAP locations:", error));
  // }, []);
    const fetchSnapLocations = async () => {
      try {
        const response = await axios.get('http://localhost:5050/api/snap');
        console.log("Fetched SNAP locations:", response.data);
        setSnapLocations(response.data);
        setLoading(false);
      } catch (err: any) {
        console.error("Error fetching SNAP locations:", err);
        setError("Failed to load SNAP locations.");
        setLoading(false);
      }
    };

    fetchSnapLocations();
  }, []);

  const handleLocationSelect = (lat: number, lng: number, address: string) => {
    setMapCenter([lat, lng]);
    setLocationName(address);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Access Navigator</h1>
        <SearchComponent onLocationSelect={handleLocationSelect} />
        {loading && <p>Loading SNAP locations...</p>}
        {error && <p style={{color: 'red'}}>{error}</p>}
        {!loading && !error && (
          <MapComponent
            center={mapCenter}
            locationName={locationName}
            snapLocations={snapLocations}
          />
        )}
      </header>
    </div>
  );
}

export default App;
