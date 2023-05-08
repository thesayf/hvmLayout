import React from 'react';
import './index.css';
import Header from './Header';
import Hero from './Hero';
// import Filters from './Filters';
// import Personalization from './Personalization';
import FeaturedCities from './FeaturedCities';
import Footer from './Footer';
import SortFilter from './SortFilter';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto px-4">
        <Hero />
        <div className="flex flex-col md:flex-row md:space-x-4">
          <SortFilter />
          <FeaturedCities />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;