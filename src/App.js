import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Banner from './components/Banner';
import Menu from './components/Menu';  // Import your Menu component
import imageSrc5 from '../src/Images/5.png'; // Assuming the image is in the same directory

function App() {
  return (
    <Router>
      <div className='bg-gradient-to-r from-opacity-95 to-opacity-100 bg-[#31442D] min-h-screen  border border-[#868a89] rounded-l'>
        {/* Header */}
        <div className='w-fit mb-4 p-5 pl-7'>
          <Header />
        </div>

        <Routes>
          {/* Route for Menu */}
          <Route path="/menu" element={<div className='w-full p-5 pl-7'><Menu /></div>} />

          {/* Default route for other components */}
          <Route path="/" element={
            <>
              {/* Banner of Best selling dishes */}
              <div className='w-full p-5 pl-7'>
                <Banner />
              </div>
              <div>
                <img src={imageSrc5} alt="Bottom Banner" className="w-full mt-12" />
              </div>
              {/* Contact */}
              <div>
                <Contact />
              </div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
