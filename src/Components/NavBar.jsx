import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/FirebaseConfig';
import { signOut, onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
  
  const [nav, setNav] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className='bg-gray-400 flex justify-between items-center h-70 px-4 text-white'>
     <Link to='/'><img
        src='/logo1.png'
        alt='Logo'
        className='h-20 w-15 mr-3'
      /> </Link>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 text-black hover:text-black'>
          <Link to='/'>Home</Link>
        </li>
        <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300  text-black hover:text-black'>
          <Link to='/movies'>Movies</Link>
        </li>
        {user ? (
          <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300  text-black hover:text-black' onClick={logout}>
            Logout
          </li>
        ) : (
          <>
            <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
              <Link to='/login'>Login</Link>
            </li>
            <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
              <Link to='/signup'>Signup</Link>
            </li>
          </>
        )}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-600 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <li className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'>
          <Link to='/'>Home</Link>
        </li>
        <li className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'>
          <Link to='/movies'>Movies</Link>
        </li>
        {user ? (
          <li className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black' onClick={logout}>
            Logout
          </li>
        ) : (
          <>
            <li className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'>
              <Link to='/login'>Login</Link>
            </li>
            <li className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'>
              <Link to='/signup'>Signup</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
