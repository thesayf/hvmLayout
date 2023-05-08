import React from 'react';

const CityCard = ({ city }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full mb-4">
      <h3 className="text-xl font-semibold mb-3">{city.name}</h3>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
      {/* Add more city details here */}
    </div>
  );
};

export default CityCard;