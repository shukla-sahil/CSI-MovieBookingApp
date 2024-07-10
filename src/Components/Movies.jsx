// src/components/Movies.jsx
import React from 'react';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';

export const movies = [
  {
    id: 1,
    title: 'Avenger EndGame',
    description: 'Summaries. After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos',
    imageUrl: '/banner1.jpg',
    fullDescription: 'This is the full description of Avenger EndGame.',
  },
  {
    id: 2,
    title: 'Frozen 2',
    description: 'Frozen II follows sisters Anna and Elsa, and their companions Kristoff, Sven, and Olaf as they travel to an enchanted forest to unravel the origin of Elsas magical power',
    imageUrl: '/banner2.jpg',
    fullDescription: 'This is the full description of Frozen 2.',
  },
  {
    id: 3,
    title: 'Joker',
    description: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
    imageUrl: 'banner3.jpg',
    fullDescription: 'This is the full description of Joker.',
  },
  {
    id: 4,
    title: 'Toy Story 4',
    description: 'This is a brief description of Toy Story 4.',
    imageUrl: 'banner4.jpg',
    fullDescription: 'This is the full description of Toy Story 4.',
  },
];

const Movies = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
