import React, { useState } from 'react';
import { Calendar, Heart, ArrowRight, Utensils } from 'lucide-react';
import LightBox from '../components/LightBox';

const PhilanthropyGallery = () => {
  const [activeYear, setActiveYear] = useState('2024');
  // Handle the full story object for the LightBox
  const [selectedStory, setSelectedStory] = useState<any | null>(null);

  const years = ['2020', '2021', '2022', '2023', '2024'];

  const impactData: any = {
    '2024': { 
        title: "Community Food Bank", 
        description: "A humble effort to share bags of rice, bottles of oil, and raw food items so families can cook with dignity at home.",
        location: "Lagos, Nigeria",
        mainImg: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
        story: "In a quiet moment of giving, we shared more than just food. We shared a promise that no neighbor would be forgotten, touching lives through the simple warmth of a home-cooked meal.",
        items: ["Bags of Rice & Grains", "Bottles of Cooking Oil", "Essential Raw Supplies"],
        sideImgs: [
            "https://images.unsplash.com/photo-1594708767771-a7502209ff51?q=80&w=1000",
            "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1000"
        ]
    },
    '2023': { 
        title: "Holiday Relief Outreach", 
        description: "Providing the basic ingredients for festive meals, ensuring every kitchen has what it needs to celebrate love and family.",
        location: "Ibadan, Nigeria",
        mainImg: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070",
        story: "During the holidays, we reached out to families to ensure their tables were full. By sharing love and essential supplies, we helped create memories that start in the heart of the home.",
        items: ["Raw Food Packages", "Vegetable Oil Supplies", "Grains & Seasoning"],
        sideImgs: [
            "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1000",
            "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1000"
        ]
    }
    // Add more years following this structure...
  };

  const currentData = impactData[activeYear] || impactData['2024'];

  // This function prepares the data for the swipeable LightBox
  const openImpactStory = (clickedImg: string) => {
    // Combine main and side images into one swipeable array
    const allPhotos = [currentData.mainImg, ...currentData.sideImgs];
    
    setSelectedStory({
      images: allPhotos,
      title: currentData.title,
      location: currentData.location,
      story: currentData.story,
      initialImage: clickedImg // Optional: use this to start the swipe at the clicked image
    });
  };

  return (
    <section id="gallery" className="py-24 bg-[#05070a] text-white overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 text-orange-500 mb-4">
              <Utensils size={20} fill="currentColor" />
              <span className="uppercase tracking-[0.3em] text-sm font-bold">JOPA Foundation</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              Sharing <span className="text-slate-500 italic text-4xl md:text-6xl font-serif">Love.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm border-l-2 border-orange-600 pl-6 py-2 leading-relaxed text-left">
            We believe every family deserves food on their table. We provide essential groceries to widows, the poor, and the fatherless so families can eat together.
          </p>
        </div>

        {/* Premium Timeline Track */}
        <div className="relative mb-24">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
          
          <div className="flex justify-between items-center relative z-10 overflow-x-auto no-scrollbar py-6">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className="relative flex flex-col items-center px-8 md:px-12 transition-all duration-500 group outline-none shrink-0"
              >
                <div className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                  activeYear === year ? 'bg-orange-600 border-orange-400 scale-[2] shadow-[0_0_25px_rgba(234,88,12,0.8)]' : 'bg-slate-900 border-slate-700'
                }`} />
                <span className={`mt-8 text-3xl md:text-5xl font-black transition-all duration-300 ${
                  activeYear === year ? 'text-white scale-110' : 'text-slate-800 group-hover:text-slate-500'
                }`}>
                  {year}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* The Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Feature - Displays active year main image */}
          <div 
            className="lg:col-span-8 group relative rounded-[2.5rem] overflow-hidden min-h-[500px] md:min-h-[600px] bg-slate-900 border border-white/5 cursor-zoom-in"
            onClick={() => openImpactStory(currentData.mainImg)}
          >
            <img 
              src={currentData.mainImg} 
              className="w-full h-full absolute inset-0 object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" 
              alt="Community impact"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/60 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 md:p-14 w-full text-left">
              <div className="flex items-center gap-4 mb-4">
                 <span className="bg-orange-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{activeYear} Support</span>
                 <span className="text-slate-300 text-xs flex items-center gap-1.5 font-medium"><Calendar size={14} className="text-orange-500"/> {currentData.location}</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">{currentData.title}</h3>
              <p className="text-slate-400 max-w-xl text-lg md:text-xl font-light leading-relaxed">
                {currentData.description}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex-1 p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-[#05070a] border border-white/10 relative overflow-hidden group text-left">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl group-hover:bg-orange-600/20 transition-colors" />
              
              <p className="text-orange-500 text-xs uppercase font-black tracking-[0.2em] mb-4">Sharing Abundance</p>
              <h4 className="text-3xl font-black mb-6 leading-tight italic font-serif">Touching lives.</h4>
              
              <ul className="space-y-4 mb-10">
                {currentData.items.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-400 font-medium">
                    <div className="w-2 h-2 bg-orange-800 rounded-full" /> 
                    {item}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => openImpactStory(currentData.mainImg)}
                className="flex items-center gap-3 text-white font-bold group text-sm uppercase tracking-widest hover:text-orange-500 transition-colors"
              >
                View Impact Photos <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-orange-500"/>
              </button>
            </div>
            
            {/* Small Side Images */}
            <div className="grid grid-cols-2 gap-4">
              {currentData.sideImgs.map((img: string, idx: number) => (
                <div 
                  key={idx}
                  onClick={() => openImpactStory(img)}
                  className="h-44 rounded-[2rem] bg-slate-900 border border-white/5 overflow-hidden cursor-zoom-in group"
                >
                  <img 
                    src={img} 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                    alt="Outreach visual"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Swipeable StoryBox Component */}
      {selectedStory && (
        <LightBox 
          data={selectedStory} 
          onClose={() => setSelectedStory(null)} 
        />
      )}
    </section>
  );
};

export default PhilanthropyGallery;