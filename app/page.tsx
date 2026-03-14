"use client"
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ExecutiveBoard from '../components/ExecutiveBoard';
import PhilanthropyGallery from '../components/PhilanthropyGallery';
import SimplePantry from '../components/SimplePantry';
import Invitation from '../components/Invitation';
import LettersOfHope from '../components/LettersOfHope';
import CoreValues from '../components/CoreValues';

import HowYouCanHelp from '../components/HowYouCanHelp';

 import Footer from '../components/Footer'; 
 

const Home = () => {
  const [currentView, setCurrentView] = useState('home');

  return ( 
  <>
      <div className="relative w-full min-h-screen bg-[#05070a]/80 ">
      <Hero />
      <ExecutiveBoard />
      <CoreValues/>
      <SimplePantry/>
      <HowYouCanHelp/>
      {/* 2. NGO CONTENT: Positioned sequentially underneath */}
      <main>
        {currentView === 'home' && (
          <>
            {/* The sliding board component lives here */}

            
            {/* You can add more components like 'About' or 'Mission' here */}
          </>
        )}
        <PhilanthropyGallery/>
        <LettersOfHope/>
        <Invitation/>
      </main>
       <Footer /> 
    </div>
  </>
  )
};

export default Home;