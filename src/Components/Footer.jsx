// src/Components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h5 className="text-lg font-bold">Movie Ticket Booking</h5>
            <p>Book your tickets for the latest movies now!</p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About Us</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          </div>
          <div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Movie Ticket Booking. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
