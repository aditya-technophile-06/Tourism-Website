import React from 'react';
import { useInView } from 'react-intersection-observer';
import DestinationCard from './DestinationCard';
import { topDestinations } from '../data/destinations';

const DestinationGrid: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="destinations" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Popular Destinations
      </h2>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {topDestinations.map((destination, index) => (
          <div
            key={destination.id}
            className={`transform transition-all duration-700 ${
              inView
                ? 'translate-y-0 opacity-100'
                : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <DestinationCard destination={destination} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationGrid;