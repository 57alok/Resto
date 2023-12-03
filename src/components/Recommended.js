import React from 'react';
import RecommendedData from '../Images/restaurantData.json';

function Recommend() {
  const recommendedItems = RecommendedData.Recommended.items;

  return (
    <div className='w-full max-w-screen-xl mx-auto'>
      <div className='mb-8'>
        <h2 className='text-3xl font-bold mb-4 text-blue-700'>Recommended</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-xl'>
          {recommendedItems.map((item, index) => (
            <div key={index} className='bg-[#F2E5CC] border border-gray-300 p-6 rounded-md mb-6 md:mb-0'>
              <h3 className='text-xl font-semibold mb-2'>{item.name}</h3>
              <p className='text-gray-700 mb-2'>{item.description}</p>
              <p className='text-blue-900 font-bold italic'>Price: ${item.price.toFixed(2)}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommend;
