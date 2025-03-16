
import { MapPin } from 'lucide-react';

const LocationMap = () => {
  return (
    <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
      <div className="bg-white p-8 rounded-sm shadow-md h-full">
        <h2 className="text-2xl font-semibold text-arch-navy mb-6">Our Location</h2>
        
        <div className="relative h-[400px] rounded-sm overflow-hidden bg-arch-gray-200 flex items-center justify-center">
          <div className="text-center p-8">
            <MapPin size={64} className="mx-auto text-arch-navy opacity-70 mb-6" />
            <h3 className="text-xl font-semibold text-arch-navy mb-2">Visit Our Office</h3>
            <p className="text-arch-gray-800 text-lg mb-1">Pension House Building, Luweero</p>
            <p className="text-arch-gray-800 text-lg mb-1">Near Luweero Diocese Guest House/Hotel</p>
            <p className="text-arch-gray-800 text-lg">Uganda</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
