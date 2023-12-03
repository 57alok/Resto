import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='flex justify-between items-center'>
            <div className="flex-shrink-0 text-white bg-[#F2E5CC] p-2.5 rounded-xl mr-6">
                <span className="text-300 tracking-wider text-[#31442D] font-serif font-thin subpixel-antialiased">Epicurean<br /> Symphony</span>
            </div>

            {/* Vertical line */}
            <div className="border-l border-solid h-10 mr-6"></div>

            <div className="w-4 h-4 bg-[#31442D] rounded-full flex items-center justify-center mr-1">
                <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>

            <div className="w-full lg:w-auto flex items-center justify-evenly">
                <div className="text-sm lg:flex-grow">
                <Link to="/menu" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 border border-[#31442D] hover:border-white p-4 rounded-xl mr-10 font-sans subpixel-antialiased tracking-wide text-base text-white text-thin">
                Our Menu
            </Link>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 border border-[#31442D] hover:border-white p-4 rounded-xl mr-10 font-sans subpixel-antialiased tracking-wide text-base text-white text-thin ">
                        Reservation
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 border border-[#31442D] hover:border-white p-4 rounded-xl mr-10 font-sans subpixel-antialiased tracking-wide text-base text-white text-thin ">
                        About Us
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:border border-[#31442D] hover:border-white p-4 rounded-xl font-sans subpixel-antialiased tracking-wide text-base text-white text-thin ">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
