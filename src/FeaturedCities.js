import React from 'react';
import CityCard from './CityCard';

const cities = [
  // Dummy data
  { name: 'New York', costOfLiving: 120, attractiveness: 7, attitude: 5 },
  { name: 'Tokyo', costOfLiving: 110, attractiveness: 8, attitude: 6 },
  { name: 'Paris', costOfLiving: 100, attractiveness: 9, attitude: 7 },
];

const FeaturedCities = () => {
  return (
    <section className="py-4 px-6">
      <h2 className="text-2xl font-bold mb-4">Featured Cities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cities.map((city, index) => (
          <CityCard key={index} city={city} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCities;