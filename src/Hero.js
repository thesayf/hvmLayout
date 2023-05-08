import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-300 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-4">Find Your City</h2>
        <input
          type="text"
          className="w-full p-2 rounded-md bg-white text-black"
          placeholder="Search city..."
        />
      </div>
    </section>
  );
};

export default Hero;
