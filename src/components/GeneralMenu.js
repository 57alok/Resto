import React from 'react';
import GmenuData from '../Images/restaurantData.json';

function GMenu() {
  const gmenuItems = GmenuData.Gmenu;

  return (
    <div className='w-full max-w-screen-xl mx-auto'>
      {gmenuItems.map((category, categoryIndex) => (
        <div key={categoryIndex} className='mb-8'>
          <h2 className='text-3xl font-bold mb-4 text-[#F5F5DC]'>{category.name}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl'>
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className='bg-[#F2E5CC] border border-gray-300 p-6 rounded-md mb-6 md:mb-0'>
                <h3 className='text-xl font-semibold mb-2 text-[#31442D]'>{item.name}</h3>
                <p className='text-gray-700 mb-2'>{item.description}</p>
                <p className='text-blue-900 font-bold italic'>Price: ${item.price.toFixed(2)}</p>
                {/* Add more details as needed */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GMenu;
