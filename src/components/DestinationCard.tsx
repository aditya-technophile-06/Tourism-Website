import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <Link 
      to={`/destination/${destination.id}`}
      className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 block"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 p-4 text-white">
        <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <Star className="fill-yellow-400 stroke-yellow-400" size={16} />
          <span>{destination.rating.toFixed(1)}</span>
        </div>
        <p className="text-sm opacity-90">{destination.bestTime}</p>
      </div>
      <div className="absolute top-4 right-4">
        <span className="bg-white/90 px-3 py-1 rounded-full text-sm font-medium text-black">
          {destination.category}
        </span>
      </div>
    </Link>
  );
};

export default DestinationCard;