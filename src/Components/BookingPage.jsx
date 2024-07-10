// src/Components/BookingPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../Firebase/FirebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth';

const moviesDetail = [
  {
    id: 1,
    title: 'Avenger EndGame',
    description: 'Summaries. After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos',
    imageUrl: '/banner1.jpg',
  },
  {
    id: 2,
    title: 'Frozen 2',
    description: 'Frozen II follows sisters Anna and Elsa, and their companions Kristoff, Sven, and Olaf as they travel to an enchanted forest to unravel the origin of Elsas magical power',
    imageUrl: '/banner2.jpg',
  },
  {
    id: 3,
    title: 'Joker',
    description: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
    imageUrl: 'banner3.jpg',
  },
  {
    id: 4,
    title: 'Toy Story 4',
    description: 'This is a brief description of Toy Story 4.',
    imageUrl: 'banner4.jpg',
  },
];

const BookingPage = () => {
  const { id } = useParams();
  const movie = moviesDetail.find(movie => movie.id === parseInt(id));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSeats = async () => {
      const docRef = doc(db, 'movies', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBookedSeats(docSnap.data().bookedSeats || []);
      } else {
        console.log('No such document!');
      }
    };
    fetchSeats();
  }, [id]);

  const toggleSeatSelection = (seatNumber) => {
    setSelectedSeats(prevSelectedSeats =>
      prevSelectedSeats.includes(seatNumber)
        ? prevSelectedSeats.filter(seat => seat !== seatNumber)
        : [...prevSelectedSeats, seatNumber]
    );
  };

  const handleBookNow = async () => {
    if (!currentUser) {
      alert('Please log in to book seats.');
      navigate('/login');
      return;
    }

    if (selectedSeats.length === 0) {
      alert('Please select at least one seat to book.');
      return;
    }

    const options = {
      key: 'rzp_test_V9oLV7gU90zvTO', 
      amount: selectedSeats.length * 100 * 100, // Amount in paise (example: 2 seats = 200 * 100)
      name: 'Movie Booking',
      description: 'Movie ticket booking',
      handler: async (response) => {
        const docRef = doc(db, 'movies', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) { 
            const currentBookedSeats = docSnap.data().bookedSeats || [];
            const updatedSeats = [...currentBookedSeats, ...selectedSeats];

            await updateDoc(docRef, {
                bookedSeats: updatedSeats,
                bookings: [...(docSnap.data().bookings || []), {
                    userId: currentUser.uid,
                    seats: selectedSeats,
                    paymentId: response.razorpay_payment_id
                }]
            });

            alert(`Seats booked: ${selectedSeats.join(', ')}`);
            navigate('/receipt', { state: { seats: selectedSeats, movieId: id, paymentId: response.razorpay_payment_id } });
        } else {
            console.error('Movie document not found!');
            alert('Something went wrong, please try again later.');
        }
    },
      prefill: {
        email: currentUser.email,
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };


  if (!movie) return <div>Movie not found</div>;

  const seats = Array.from({ length: 40 }, (_, index) => index + 1);

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
    <div
      className="grid grid-cols-5 gap-2 mb-4"
    >
      {seats.map(seat => (
        <div
          key={seat}
          onClick={() =>!bookedSeats.includes(seat) && toggleSeatSelection(seat)}
          className={`p-2 border rounded cursor-pointer ${selectedSeats.includes(seat)? 'bg-red-400 text-white' : bookedSeats.includes(seat)? 'bg-gray-300 cursor-not-allowed' : 'bg-green-300 hover:bg-green-500'}`}
        >
          {seat}
        </div>
      ))}
    </div>
    <button
      onClick={handleBookNow}
      className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out"
      disabled={selectedSeats.length === 0}
    >
      Book Now
    </button>
  </div>
</div>
  );
};

export default BookingPage;
