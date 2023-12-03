import React from 'react';

function SearchBar() {
    return (
        <div className="relative ">
            <input
                type="text"
                placeholder="Explore Now"
                className="bg-[#F5E7CD] border border-gray-300 rounded-full py-2 pl-10  focus:border-teal-500 placeholder-[#31442D] text-[#31442D] font-sans font-medium"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {/* Search icon with adjusted color */}
                <svg
                    className="w-6 h-5 text-[#31442D]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5.2-5.2"></path>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 10C15 5.58172 11.4183 2 7.00002 2C2.58172 2 0 5.58172 0 10C0 14.4183 2.58172 18 7.00002 18C9.05753 18 10.987 17.157 12.5565 15.7713"
                    ></path>
                </svg>
            </div>
        </div>
    );
}

export default SearchBar;
