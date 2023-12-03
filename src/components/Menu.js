import React, { useState } from 'react';
import Recommend from './Recommended';
import GMenu from './GeneralMenu';

function Menu() {
  const [selectedButton, setSelectedButton] = useState('button2'); // Set the default value to 'button2'

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName === selectedButton ? null : buttonName);
  };

  const renderContent = () => {
    if (selectedButton === 'button1') {
      return (
        <div>
          <Recommend />
        </div>
      );
    } else if (selectedButton === 'button2') {
      return (
        <div className="text-white">
          <GMenu />
        </div>
      );
    } else {
      return null; // No content when no button is selected
    }
  };

  return (
    <div className='h-full w-full'>
      {/* Top */}
      <div className='flex justify-between p-3 mb-5'>
        {/* left */}
        <div>
          <h2 className='font-sans text-4xl text-white'>Order Food On Table</h2>
        </div>
        {/* right */}
        <div>
          <button
            onClick={() => handleButtonClick('button1')}
            className={`rounded-lg border-2 border-white text-white px-4 py-2 focus:outline-none mr-3 transition-colors ${selectedButton === 'button1' ? 'bg-[#31442D] text-[#31442D]' : 'hover:bg-[#31442D] hover:text-[#F2E5CC]'}`}
          >
            Recommended
          </button>
          <button
            onClick={() => handleButtonClick('button2')}
            className={`rounded-lg border-2 border-white text-white px-4 py-2 focus:outline-none transition-colors ${selectedButton === 'button2' ? 'bg-[#31442D] text-[#31442D]' : 'hover:bg-[#31442D] hover:text-[#F2E5CC]'}`}
          >
            Menu
          </button>
        </div>
      </div>
      {/* Bottom */}
      <div>
        {renderContent()}
      </div>
    </div>
  );
}

export default Menu;
