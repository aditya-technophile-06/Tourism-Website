import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Star, ArrowLeft } from 'lucide-react';
import { topDestinations } from '../data/destinations';

const DestinationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const destination = topDestinations.find((d) => d.id === id);

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <Link
        to="/"
        className="fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ArrowLeft size={24} />
      </Link>

      {/* Header Image & Details */}
      <div className="relative h-[60vh] w-full">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {destination.name}
            </h1>
            <div className="flex items-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>{destination.location.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>{destination.bestTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="fill-yellow-400 stroke-yellow-400" size={20} />
                <span>{destination.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed">
              {destination.description}
            </p>
          </section>

          {/* Attractions Section */}
          <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Top Attractions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destination.attractions.map((attraction, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Attraction Image */}
                  <div className="relative w-full h-48">
                    <img
                      src={attraction.imageUrl}
                      alt={attraction.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Attraction Content */}
                  <div className="flex flex-col p-4 flex-grow">
                    <h3 className="font-bold text-lg mb-2">
                      {attraction.name}
                    </h3>
                    <p className="text-gray-600 flex-grow overflow-hidden line-clamp-3">
                      {attraction.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
