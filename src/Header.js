import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">Logo</div>
        <nav>
          <ul className="flex space-x-6">
            <li>Home</li>
            <li>Cities</li>
            <li>Countries</li>
            <li>About</li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-white">&#9776;</button>
        </div>
      </div>
    </header>
  );
};

export default Header;