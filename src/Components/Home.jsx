import React from 'react';
import Carousel from './Carousel';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate('/movies')
  }
  return (
    <div className="bg-gray-200">
      {/* Hero Section */}
      <section className="py-12 px-4 ">
        <div className="max-w-7xl mx-auto  " >
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome to Movie Ticket Booking</h2>
          <div className=" shadow-black shadow-2xl">
          <Carousel  />
          </div>
        </div>
      </section>

      <section className="bg-zinc-500 text-black py-12 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Book Latest Movies</h1>
          <p className="text-lg mb-8">Book your tickets for the latest movies now!</p>
          <button onClick={handleClick} className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md">
            Explore Now
          </button>
        </div>
      </section>

      {/* Featured Movies Carousel */}
     
      {/* Categories Section */}
      <section className="bg-blie-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Example category cards */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Action</h3>
              <p className="text-gray-700">Find the latest action-packed movies.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Comedy</h3>
              <p className="text-gray-700">Laugh out loud with our comedy selections.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Drama</h3>
              <p className="text-gray-700">Explore powerful drama movies.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Sci-Fi</h3>
              <p className="text-gray-700">Discover futuristic sci-fi adventures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Movie Quotes Section */}
      <section className="bg-gray-800 py-12 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Movie Quotes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <p className="text-lg italic">"I'm going to make him an offer he can't refuse." - The Godfather</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <p className="text-lg italic">"May the Force be with you." - Star Wars</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <p className="text-lg italic">"Here's looking at you, kid." - Casablanca</p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <p className="text-lg italic">"Why so serious?" - The Dark Knight</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="bg-zinc-500 py-12 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-black font-bold mb-4">Ready to book your tickets?</h2>
          <button onClick={handleClick} className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md">
            Book Now
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
