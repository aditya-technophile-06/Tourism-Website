import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { ChevronDown } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero: React.FC = () => {
  const scrollToDestinations = () => {
    const destinationsSection = document.getElementById('destinations');
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Make sure the paths here match where your images actually live:
  const imagePaths = [
    '/images/KARNATAKA.webp',
    '/images/CHAMUNDI TEMPLE.jpg',
    '/images/Gol-Gumbaz-Karnataka.webp',
    '/images/HAMPI.jpg',
    '/images/JOG.jpg',
    '/images/Kudremukh-National-Park-banner-Image-1.webp',
    '/images/Mysore-Palace.jpg',
    '/images/PALACE.jpg',
    '/images/Shravanabelagola.jpg',
  ];

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;

    imagePaths.forEach((path) => {
      const img = new Image();
      img.src = path;

      // If it loads
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagePaths.length) {
          setImagesLoaded(true);
        }
      };

      // If it fails to load
      img.onerror = () => {
        loadedCount++;
        // Even if some images fail, we eventually end the loading state
        if (loadedCount === imagePaths.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, [imagePaths]);

  // Display a spinner until images are fully loaded or all attempts have finished
  if (!imagesLoaded) {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-gray-100">
        {/* Simple Tailwind spinner example */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-2" />
          <p className="text-lg font-semibold text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full w-full"
      >
        {imagePaths.map((path, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${path})`,
              }}
            >
              {/* The overlay ensures text readability; transition smooths opacity changes */}
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Text and Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Discover Karnataka
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-lg">
          Experience the Rich Heritage and Natural Beauty
        </p>
        <button
          onClick={scrollToDestinations}
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg"
        >
          Explore Destinations
        </button>
      </div>

      {/* Chevron Down */}
      <div
        onClick={scrollToDestinations}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer z-10"
      >
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
