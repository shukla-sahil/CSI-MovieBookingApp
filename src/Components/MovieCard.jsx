import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movieinfo/${movie.id}`)}
      className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100 hover:bg-gray-400 cursor-pointer transition duration-300 ease-in-out"
    >
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={movie.imageUrl}
        alt={`Poster of ${movie.title}`}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-2xl mb-2 text-gray-800">{movie.title}</h2>
        <p className="text-gray-700 text-base">{movie.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={() => navigate(`/movieinfo/${movie.id}`)}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;