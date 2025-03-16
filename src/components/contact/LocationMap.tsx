
import { MapPin } from 'lucide-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const LocationMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Luweero, Uganda coordinates (approximate)
  const location = { lat: 0.8478, lng: 32.4762 };
  
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '0.125rem',
  };

  const onMapLoad = () => {
    setMapLoaded(true);
  };

  return (
    <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
      <div className="bg-white p-8 rounded-sm shadow-md h-full">
        <h2 className="text-2xl font-semibold text-arch-navy mb-6">Our Location</h2>
        
        <div className="relative h-[400px] rounded-sm overflow-hidden bg-arch-gray-200">
          {/* Google Map */}
          <LoadScript googleMapsApiKey="" onLoad={() => console.log('Google Maps API loaded')}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={location}
              zoom={15}
              onLoad={onMapLoad}
            >
              <Marker position={location} />
            </GoogleMap>
          </LoadScript>

          {/* Fallback if map doesn't load */}
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-arch-gray-200">
              <div className="text-center">
                <MapPin size={48} className="mx-auto text-arch-navy opacity-20 mb-4" />
                <p className="text-arch-gray-800">Map loading...</p>
                <p className="text-arch-gray-800 mt-2">Pension House Building, Luweero</p>
                <p className="text-arch-gray-800">Near Luweero Diocese Guest House/Hotel</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
