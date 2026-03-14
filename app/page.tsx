"use client"
import React, { useState, useEffect ,useContext} from 'react';
import {ButtonContext} from "../context/donate.tsx"
import Hero from '../components/Hero';
import ExecutiveBoard from '../components/ExecutiveBoard';
import PhilanthropyGallery from '../components/PhilanthropyGallery';
import SimplePantry from '../components/SimplePantry';
import Invitation from '../components/Invitation';
import LettersOfHope from '../components/LettersOfHope';
import CoreValues from '../components/CoreValues';

import HowYouCanHelp from '../components/HowYouCanHelp';
import DonationPortal from "../components/DonationPortal.tsx"

 import Footer from '../components/Footer'; 
 

const Home = () => {
  const {active,setActive} = useContext(ButtonContext)
  const [currentView, setCurrentView] = useState('home');

  return ( 
  <>
    {active ? (
    <DonationPortal/>
    ) : (
        <div className="relative w-full min-h-screen bg-white selection:bg-blue-100">
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
  ) }
  </>
  )
};

export default Home;