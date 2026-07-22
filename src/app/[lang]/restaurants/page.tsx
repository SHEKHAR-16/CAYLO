"use client";

import Image from "next/image";
import { FaPaperPlane, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link"; 
import { useState, useEffect } from "react";

const galleryImages = [
  "/restaurants-images/i1.jpg",
  "/restaurants-images/i2.jpg",
  "/restaurants-images/i3.png", 
  "/restaurants-images/i4.jpg",
  "/restaurants-images/i5.jpg",
  "/restaurants-images/i6.jpg",
  "/restaurants-images/i7.jpg",
  "/restaurants-images/i8.jpg",
];

export default function Restaurants() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const getIndex = (offset: number) => {
    let index = currentIndex + offset;
    while (index < 0) {
      index += galleryImages.length;
    }
    return index % galleryImages.length;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    
    <main className="w-full flex flex-col items-center bg-white">

      <style>{`
        @keyframes fillLine {
          from { width: 0%; }
          to { width: 100%; }
        }
        .progress-line-fill {
          animation: fillLine 4000ms linear forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0.6; }
          to { opacity: 1; }
        }
        .fade-image {
          animation: fadeIn 0.4s ease-in-out;
        }
      `}</style>
    
      <section className="w-full flex flex-col items-center pb-[10px] min-h-[580px]">
        
        <div className="w-[1950px] max-w-full h-[80px] flex items-center justify-center mb-[10px]">
          <h1 className="font-['Agbalumo',_sans-serif] text-black text-[30px] tracking-wide">
            Locations
          </h1>
        </div>

        <div className="relative left-[-150px] top-[-20px] w-[1905px] max-w-full h-[438px] mx-auto flex flex-wrap justify-center items-center">
          
          <div className="w-[369px] h-[415px] mx-[10px] border-[5px] border-[#C8021A] rounded-[25px] flex flex-col items-center p-[20px] text-center shadow-sm">
            <a 
              href="https://www.google.com/maps/place/Caylos+Drammen/@59.7395038,10.1982919,16z/data=!3m1!4b1!4m6!3m5!1s0x464123001a70a997:0x3980e107069ee772!8m2!3d59.7395038!4d10.1982919!16s%2Fg%2F11vm1m3xbv?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="Caylos Drammen"
              className="group w-[75px] h-[75px] mt-[10px] rounded-full border-[2px] border-[#C8021A] flex items-center justify-center mb-[20px] hover:bg-[#C8021A] transition-colors cursor-pointer shrink-0"
            >
              <FaPaperPlane className="text-[#C8021A] group-hover:text-white text-[30px] -mt-1 -ml-1 transition-colors" />
            </a>

            <div className="relative top-[20px] flex flex-col items-center w-full">
              <h2 className="font-agbalumo text-[#C8021A] text-[40px] leading-none mb-[20px]">
                Caylos Drammen
              </h2>
              <div className="flex flex-col gap-1 font-['apple-systems',_sans-serif] text-[17px] text-[#333333] mb-[25px]">
                <p className="text-[20px]">Griffenfeldsgate 3</p>
                <p className="text-[20px]">3045 Drammen</p>
                <p className="font-bold text-[20px]">411 96 000</p>
              </div>
            </div>

            <a 
              href="https://caylosdrammen.agiorder.no" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-[130px] h-[45px] mb-[40px] bg-[#C8021A] text-white font-bold rounded-[15px] hover:bg-[#a00215] transition-colors flex items-center justify-center cursor-pointer shrink-0"
            >
              Order Now
            </a>
          </div>
            
          <div className="w-[369px] h-[415px] mx-[15px] border-[5px] border-[#C8021A] rounded-[25px] flex flex-col items-center p-[20px] text-center shadow-sm">
            <a 
              href="https://www.google.com/maps/place/CT%C3%B8nsberg/@59.2651799,10.4007678,17z/data=!4m6!3m5!1s0x4646b7007b9255b1:0xee63610cc96ecb2c!8m2!3d59.2651799!4d10.4007678!16s%2Fg%2F11wtx44_sl?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="CTønsberg"
              className="group w-[75px] h-[75px] mt-[10px] rounded-full border-[2px] border-[#C8021A] flex items-center justify-center mb-[20px] hover:bg-[#C8021A] transition-colors cursor-pointer shrink-0"
            >
              <FaPaperPlane className="text-[#C8021A] group-hover:text-white text-[30px] -mt-1 -ml-1 transition-colors" />
            </a>

            <div className="relative top-[20px] flex flex-col items-center w-full">
              <h2 className="font-agbalumo text-[#C8021A] text-[40px] leading-none mb-[20px]">
                Caylos Tønsberg
              </h2>
              <div className="flex flex-col gap-1 font-['apple-systems',_sans-serif] text-[17px] text-[#333333] mb-[25px]">
                <p className="font-bold text-black text-[20px]">Open now</p>
                <p className="text-[20px]">Rambergveien 45</p>
                <p className="text-[20px]">3115 Tønsberg</p>
                <p className="font-bold text-[20px]">411 90 900</p>
              </div>
            </div>

            <a 
              href="https://caylostonsberg.agiorder.no" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-[130px] h-[45px] mb-[40px] bg-[#C8021A] text-white font-bold rounded-[15px] hover:bg-[#a00215] transition-colors flex items-center justify-center cursor-pointer shrink-0"
            >
              Order Now
            </a>
          </div>

        </div>
      </section>

     
      <section className="w-full bg-[#FFA700] flex flex-col items-center relative  pb-10px px-4 min-h-[575px]">
        
        <h2 className="relative  top-[30px] font-agbalumo text-white text-[33px] mb-[50px] text-center tracking-wide [text-shadow:0px_2px_4px_rgba(0,0,0,0.2)]">
          Check out Our Restaurants!
        </h2>
        
      
        <div className="relative w-full max-w-[1250px] flex items-center justify-center h-[400px]">
          
          <button onClick={prevSlide} className="absolute left-[10px] md:left-[20px] text-[#d68c00] hover:text-white text-[50px] z-[60] transition-colors cursor-pointer">
            <FaChevronLeft />
          </button>

          <div className="flex items-center justify-center">
            
            <div className="relative w-[180px] h-[180px] border-[4px] border-white z-10 -mr-[40px] opacity-90 cursor-pointer overflow-hidden" onClick={() => setCurrentIndex(getIndex(-2))}>
              <div className="w-full h-full bg-black/50 absolute top-0 left-0 z-10"></div> 
              <img src={galleryImages[getIndex(-2)]} key={galleryImages[getIndex(-2)]} alt="Caylos" className="w-full h-full object-cover z-0 fade-image" />
            </div>

            <div className="relative w-[250px] h-[250px] border-[4px] border-white z-20 -mr-[40px] opacity-95 cursor-pointer overflow-hidden" onClick={() => setCurrentIndex(getIndex(-1))}>
              <div className="w-full h-full bg-black/30 absolute top-0 left-0 z-10"></div> 
              <img src={galleryImages[getIndex(-1)]} key={galleryImages[getIndex(-1)]} alt="Caylos" className="w-full h-full object-cover z-0 fade-image" />
            </div>

            <div className="relative w-[350px] h-[350px] border-[5px] border-white z-30 shadow-[0_0_20px_rgba(0,0,0,0.3)] bg-white overflow-hidden">
              <img src={galleryImages[getIndex(0)]} key={galleryImages[getIndex(0)]} alt="Caylos Center" className="w-full h-full object-cover z-0 fade-image" />
            </div>
            
            <div className="relative w-[250px] h-[250px] border-[4px] border-white z-20 -ml-[40px] opacity-95 cursor-pointer overflow-hidden" onClick={() => setCurrentIndex(getIndex(1))}>
              <div className="w-full h-full bg-black/30 absolute top-0 left-0 z-10"></div>
              <img src={galleryImages[getIndex(1)]} key={galleryImages[getIndex(1)]} alt="Caylos" className="w-full h-full object-cover z-0 fade-image" />
            </div>
            
            <div className="relative w-[180px] h-[180px] border-[4px] border-white z-10 -ml-[40px] opacity-90 cursor-pointer overflow-hidden" onClick={() => setCurrentIndex(getIndex(2))}>
              <div className="w-full h-full bg-black/50 absolute top-0 left-0 z-10"></div>
              <img src={galleryImages[getIndex(2)]} key={galleryImages[getIndex(2)]} alt="Caylos" className="w-full h-full object-cover z-0 fade-image" />
            </div>

          </div>
          
          <button onClick={nextSlide} className="absolute right-[10px] md:right-[20px] text-[#d68c00] hover:text-white text-[50px] z-[60] transition-colors cursor-pointer">
            <FaChevronRight />
          </button>

        </div>
        
        <div className="flex gap-[12px] mt-[30px] z-[60] relative">
          {galleryImages.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-[13px] h-[13px] rounded-full transition-colors duration-300 cursor-pointer ${
                idx === currentIndex ? "bg-[#333333]" : "bg-[#d68c00]"
              }`}
            />
          ))}
        </div>
        
        <div className="w-full max-w-[1260px] h-[4px] bg-[#444444]/40 rounded-full mt-[20px] overflow-hidden">
          <div key={currentIndex} className="h-full bg-[#444444] progress-line-fill rounded-full"></div>
        </div>
      </section>

    </main>
  );
}