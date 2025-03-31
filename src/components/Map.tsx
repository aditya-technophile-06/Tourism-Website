import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapProps {
  center: google.maps.LatLngLiteral;
  zoom?: number;
}

const Map: React.FC<MapProps> = ({ center, zoom = 12 }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
        version: 'weekly',
      });

      try {
        const { Map } = await loader.importLibrary('maps');
        
        if (mapRef.current && !mapInstanceRef.current) {
          mapInstanceRef.current = new Map(mapRef.current, {
            center,
            zoom,
            disableDefaultUI: true,
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }],
              },
            ],
          });

          new google.maps.Marker({
            position: center,
            map: mapInstanceRef.current,
          });
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();
  }, [center, zoom]);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg"
    />
  );
};

export default Map;