"use client"
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ExecutiveBoard from '../components/ExecutiveBoard';
import PhilanthropyGallery from '../components/PhilanthropyGallery';
import SimplePantry from '../components/SimplePantry';
import Invitation from '../components/Invitation';
import LettersOfHope from '../components/LettersOfHope';



 import Footer from '../components/Footer'; 

const Home = () => {
  // Use state to manage views if you decide to add a Dashboard or separate pages later
  const [currentView, setCurrentView] = useState('home');

  return (
    /* The Main Div: The only top-level element as requested */
    <div className="relative w-full min-h-screen bg-white selection:bg-blue-100">
      
      {/* 1. HERO SECTION: Positioned at the top */}
      <Hero />
      <SimplePantry/>

      {/* 2. NGO CONTENT: Positioned sequentially underneath */}
      <main>
        {currentView === 'home' && (
          <>
            {/* The sliding board component lives here */}
            <ExecutiveBoard />
            
            {/* You can add more components like 'About' or 'Mission' here */}
          </>
        )}
        <PhilanthropyGallery/>
        <LettersOfHope/>
        <Invitation/>
      </main>

      
       <Footer /> 
      
    </div>
  );
};

export default Home;