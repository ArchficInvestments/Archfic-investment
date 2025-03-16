
import { MapPin } from 'lucide-react';

const LocationMap = () => {
  return (
    <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
      <div className="bg-white p-8 rounded-sm shadow-md h-full">
        <h2 className="text-2xl font-semibold text-arch-navy mb-6">Our Location</h2>
        
        <div className="relative h-[400px] rounded-sm overflow-hidden bg-arch-gray-200">
          {/* This is a placeholder for the map. In a real project, you would integrate Google Maps or another mapping solution */}
          <div className="absolute inset-0 flex items-center justify-center bg-arch-gray-200">
            <div className="text-center">
              <MapPin size={48} className="mx-auto text-arch-navy opacity-20 mb-4" />
              <p className="text-arch-gray-800">Map would be displayed here</p>
              <p className="text-arch-gray-800 mt-2">Luweero, Uganda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
