import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Footer</div>
        <div className="flex space-x-4">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;