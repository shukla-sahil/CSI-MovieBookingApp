import React, { useState } from 'react';
import { FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Modal from './Modal'; // Ensure you have the Modal component as shown earlier

const Carousel = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/banner1.jpg',
      video: 'https://www.youtube.com/watch?v=TcMBFSGVi1c&ab_channel=MarvelEntertainment'
    },
    {
      image: '/banner2.jpg',
      video: 'https://www.youtube.com/embed/video_id2'
    },
    {
      image: '/banner3.jpg',
      video: 'https://www.youtube.com/embed/video_id3'
    },
    {
      image: '/banner4.jpg',
      video: 'https://www.youtube.com/embed/video_id4'
    }
  ];

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className='relative mt-1 mb-5'>
      <div className='w-full h-[500px] bg-cover bg-center rounded-md overflow-hidden' style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
        <div className='flex items-center justify-center h-full bg-black bg-opacity-50'>
          <button
            className='text-white bg-[#00df9a] p-4 rounded-full flex items-center justify-center'
            onClick={openVideo}
          >
            <FaPlay size={30} />
          </button>
        </div>
        <button
          className='absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2'
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>
        <button
          className='absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full p-2'
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Modal for Video */}
      {isVideoOpen && (
        <Modal closeVideo={closeVideo}>
          <div className='w-full h-full flex items-center justify-center'>
            <iframe
              width='100%'
              height='100%'
              src={slides[currentSlide].video}
              frameBorder='0'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              title='Embedded youtube'
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Carousel;
