import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ children, closeVideo }) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
      <div className='relative w-full h-full max-w-4xl mx-auto bg-black'>
        <button
          className='absolute top-4 right-4 text-white'
          onClick={closeVideo}
        >
          <AiOutlineClose size={30} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
