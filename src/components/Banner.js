import React, { useState, useEffect } from 'react';
import SearchBar from './Search'; 
import imageSrc1 from '../Images/1.png'; 
import imageSrc2 from '../Images/2.png'; 
import imageSrc3 from '../Images/3.png'; 
import imageSrc4 from '../Images/4.png'; 

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getImageSource = (slideNumber) => {
    switch (slideNumber) {
      case 1:
        return imageSrc2;
      case 2:
        return imageSrc3;
      case 3:
        return imageSrc4;
      default:
        return '';
    }
  };

  const handleDotClick = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
      <div className='flex h-full'>
        {/* Left */}
        <div className='flex flex-col justify-center w-[45%] h-full'>
          <div className='flex items-center'>
            <p className='text-4xl text-white'>Feast On</p>
            <span className="ml-5">
              <img src={imageSrc1} alt="Feast Image" className="w-25 h-24" />
            </span>
          </div>
          <div className='mt-2 items-center'>
            <p className='text-4xl text-white'>The Richness Of Arabian Nights</p>
          </div>
          <div className='mt-9'>
            <SearchBar />
          </div>
        </div>
        {/* Right - Slideshow */}
        <div className='w-[50%] mt-5 border-2 rounded-xl ml-8 overflow-hidden relative'>
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${(currentSlide - 1) * 100}%)`
            }}
          >
            {[1, 2, 3].map((slideNumber) => (
              <img
                key={slideNumber}
                src={getImageSource(slideNumber)}
                alt={`Slide ${slideNumber}`}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
          {/* Pointer Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[1, 2, 3].map((slideNumber) => (
              <div
                key={slideNumber}
                onClick={() => handleDotClick(slideNumber)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentSlide === slideNumber ? 'bg-white' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
  );
}

export default Banner;
