import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Movies from './Components/Movies';
import MovieInfo from './Components/MovieInfo';
import BookingPage from './Components/BookingPage';
import Receipt from './Components/Receipt'; // Assuming you have a Receipt component
import { AuthProvider } from './hooks/useAuth';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movieinfo/:id" element={<MovieInfo />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/receipt" element={<Receipt />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
