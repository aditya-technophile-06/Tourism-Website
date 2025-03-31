export interface Attraction {
  name: string;
  description: string;
  imageUrl: string;
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: 'Heritage' | 'Nature' | 'Pilgrimage' | 'Adventure' | 'Beach';
  rating: number;
  bestTime: string;
  location: {
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  attractions: Attraction[];
}

export interface WeatherInfo {
  city: string;
  temperature: number;
  condition: string;
  icon: string;
}