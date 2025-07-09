import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import MapComponent from './MapComponent';
import SearchComponent from './SearchComponent';

function App() {
  const [mapCenter, setMapCenter] = useState<[number, number]>([37.3387, -121.8853]); // Default position (San Jose, CA)
  const [locationName, setLocationName] = useState<string>('San Jose, CA');

  const handleLocationSelect = (lat: number, lng: number, address: string) => {
    setMapCenter([lat, lng]);
    setLocationName(address);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Access Navigator</h1>
        <SearchComponent onLocationSelect={handleLocationSelect} />
        <MapComponent center={mapCenter} locationName={locationName} />
      </header>
    </div>
  );
}

export default App;
