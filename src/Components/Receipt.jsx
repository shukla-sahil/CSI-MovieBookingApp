// src/components/Receipt.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Receipt = () => {
  const location = useLocation();
  const { seats, paymentId } = location.state;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Booking Receipt</h2>
        <p className="text-gray-700 mb-2">Seats: {seats.join(', ')}</p>
        <p className="text-gray-700 mb-4">Payment ID: {paymentId}</p>
        <p className="text-gray-700">Thank you for your booking!</p>
      </div>
    </div>
  );
};

export default Receipt;
