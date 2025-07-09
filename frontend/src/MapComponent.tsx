import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// This component updates the map view when the position changes
const MapUpdater: React.FC<{ center: [number, number] }> = ({ center }) => {
    const map = useMap();
    map.setView(center, map.getZoom());
    return null;
}

interface MapComponentProps {
    center: [number, number]; // latitude and longitude
    locationName: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ center, locationName }) => {// reusable map piece
    // const defaultPosition: [number, number] = [37.3387, -121.8853]; // Default position (San Jose, CA)
    return (
        <MapContainer
            center={center}
            zoom={13} // 13=city-level, 1=world-level, 18=street-level
            style={{ height: '500px', width: '100%' }}
        >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapUpdater center={center} />
        <Marker position={center}>
            <Popup>
                {locationName}
            </Popup>
        </Marker>
        </MapContainer>
    );
};
export default MapComponent; // closes and exports the map component 