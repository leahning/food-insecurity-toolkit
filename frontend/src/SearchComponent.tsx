import React, { useState } from 'react';

interface SearchComponentProps {
    onLocationSelect: (lat: number, lng: number, address: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onLocationSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async () => {
        if (!searchTerm) return;

        setIsLoading(true);
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchTerm)}&limit=1`
            );
            const data = await response.json();

            if (data.length > 0) {
                const result = data[0];
                onLocationSelect(
                    parseFloat(result.lat),
                    parseFloat(result.lon),
                    result.display_name
                );
            } else {
                alert('No location found');
            }
        } catch (error) {
            console.error('Error fetching location:', error);
            alert('Error fetching location. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{ margin: '20px', textAlign: 'center' }}>
            <input
                type="text"
                placeholder="Enter address or city: "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    width: '300px',
                    marginRight: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                }}
            />
            <button
                onClick={handleSearch}
                disabled={isLoading}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#00438b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: isLoading ? 'not-allowed' : 'pointer'
                }}
            >
                {isLoading ? 'Searching...' : 'Search'}
            </button>
        </div>
    );
};

export default SearchComponent;