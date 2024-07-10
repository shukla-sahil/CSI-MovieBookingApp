import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const moviesDetail = [
  {
    id: 1,
    title: 'Avenger EndGame',
    description: 'Summaries. After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos',
    imageUrl: '/banner1.jpg',
    fullDescription: 'The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios` grand conclusion to twenty-two films, "Avengers: Endgame."',
  },
  {
    id: 2,
    title: 'Frozen 2',
    description: 'Frozen II follows sisters Anna and Elsa, and their companions Kristoff, Sven, and Olaf as they travel to an enchanted forest to unravel the origin of Elsas magical power',
    imageUrl: '/banner2.jpg',
    fullDescription: 'Three years after the events of Frozen, Elsa begins to hear strange voices calling to her from the forest and all of a sudden Arendelle finds itself in danger. Elsa, Anna, Kristoff, Olaf and Sven must go beyond Arendelle to find the origin of Elsa`s powers and save their kingdom.',
  },
  {
    id: 3,
    title: 'Joker',
    description: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
    imageUrl: '/banner3.jpg',
    fullDescription: 'The Joker is noted for his clownlike appearance and sick humour. The Joker, initially portrayed as a small-time crook, was disfigured and driven insane by an accident with toxic chemicals. He was depicted with chalk-white skin, ruby-red lips permanently fixed in a demonic grin, and bright green hair. ',
  },
  {
    id: 4,
    title: 'Toy Story 4',
    description: 'This is a brief description of Toy Story 4.',
    imageUrl: '/banner4.jpg',
    fullDescription: 'When Woody is stolen by a toy collector, Buzz and his friends set out on a rescue mission to save Woody before he becomes a museum toy property with his roundup gang Jessie, Prospector, and Bullseye..',
  },
];

const MovieInfo = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const movie = moviesDetail.find(movie => movie.id === parseInt(id));

  if (!movie) return <div className="text-gray-600 text-lg">Movie not found</div>;

  return (
    <div
      className="max-w-4xl mx-auto mt-6 bg-white shadow-lg rounded-lg p-6 flex justify-center"
    >
      <div className="w-1/2 pr-4">
        <img
          className="w-full h-auto rounded-lg object-cover"
          src={movie.imageUrl}
          alt={movie.title}
        />
      </div>
      <div className="w-1/2 pl-4">
        <h2
          className="text-3xl font-bold mb-4 text-gray-800"
        >
          {movie.title}
        </h2>
        <p
          className="text-gray-700 mb-4 leading-relaxed"
        >
          {movie.fullDescription}
        </p>
        <div className="mb-4 flex items-center">
          {/* Add your stars rating here */}
          ⭐⭐⭐⭐⭐
        </div>
        <button
          onClick={() => navigate(`/booking/${id}`)}
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MovieInfo;
