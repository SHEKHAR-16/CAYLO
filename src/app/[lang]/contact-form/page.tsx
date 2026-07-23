"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image"; 


import intlTelInput from "intl-tel-input";
import "intl-tel-input/dist/css/intlTelInput.css";

export default function ContactUs() {
  const [num1, setNum1] = useState(3);
  const [num2, setNum2] = useState(4);
  const [mounted, setMounted] = useState(false);
  const [userAnswer, setAnswer] = useState("");

  const generateMathQuestion = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
  };

  useEffect(() => {
    generateMathQuestion();
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    
    const correctAnswer = num1 + num2;
    if (parseInt(userAnswer) !== correctAnswer) {
      alert(`Incorrect security answer! please try again.`);
      generateMathQuestion();
      setAnswer(""); 
      return; 
    }
    alert("Form submitted successfully! The math was correct.");
  };

  
  const phoneInputRef = useRef(null);

  useEffect(() => {
 
    if (phoneInputRef.current) {
      const iti = intlTelInput(phoneInputRef.current, {
        initialCountry: "auto" as any,
        separateDialCode: true,
        geoIpLookup: function (callback: (countryCode: string) => void) {
         
          fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback("IN"));
        },
      } as any);

      
      return () => {
        iti.destroy();
      };
    }
  }, []);

  return (
    <main className="w-full min-h-screen bg-white pt-[20px] px-[20px]  font-['Source_Sans_Pro',_sans-serif]">
      
      
      <h1 className="font-['Lato',_sans-serif] text-center font-bold text-[52px] tracking-wide text-black mb-[20px]">
        Contact Us
      </h1>

      
      <div className="w-full max-w-[1100px] ml-[400px] mr-auto flex flex-col md:flex-row shadow-[0_0_15px_rgba(0,0,0,0.06)]">
        
        
        <aside className="w-full md:w-[480px] md:min-w-[420px] text-white pt-[20px] px-[35px] pb-[40px] relative overflow-hidden shrink-0 bg-[#4A150D]">
          
          <Image 
            src="/images/CONTACT1.png" 
            alt="Contact Us Background" 
            fill 
            className="object-cover object-center transition-opacity dark:opacity-55 scale-100 z-0" 
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-br from-[#4A150D]/90 to-black/20 pointer-events-none z-0"></div>

          <h2 className="font-['Lato',_sans-serif] text-[32px] font-bold mb-[10px] tracking-wide relative z-10">
            Get in Touch
          </h2>
          
          <p className="font-['-apple-system',_sans-serif] text-[15px] leading-[1.6] mb-[30px] font-normal relative z-10">
            Your opinion matters to us! Please feel free to fill out the form
            below to share your thoughts, suggestions, or any issues you
            may have encountered. We strive to improve every day and
            provide the best experience for our valued customers.
          </p>
          
          <div className="flex items-center gap-[10px] relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:caylos@caylos.no" className="text-[18px] underline underline-offset-4 hover:text-gray-300 transition-colors">
              caylos@caylos.no
            </a>
          </div>

        </aside>

        
        <div className="flex-1 bg-[#f4f4f4] pt-[50px] px-[40px] md:px-[10px] pb-[50px]">
          
         
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
            
            
            <div className="flex flex-col sm:flex-row gap-[20px]">
              <input 
                type="text" 
                placeholder="First Name"
                className="flex-1 h-[42px] border border-[#d1d1d1] bg-white px-[15px] outline-none focus:border-[#C8021A] transition-colors placeholder-[#a0a0a0] text-black text-[14.5px]"
                required 
              />
              <input 
                type="text" 
                placeholder="Last Name"
                className="flex-1 h-[42px] border border-[#d1d1d1] bg-white px-[15px] outline-none focus:border-[#C8021A] transition-colors placeholder-[#a0a0a0] text-black text-[14.5px]"
                required 
              />
            </div>

           
            <div className="flex flex-col sm:flex-row gap-[20px]">
              <input 
                type="email" 
                placeholder="Email"
                className="flex-1 h-[42px] border border-[#d1d1d1] bg-white px-[15px] outline-none focus:border-[#C8021A] transition-colors placeholder-[#a0a0a0] text-black text-[14.5px]"
                required 
              />
              
              
              <div className="flex-1 [&_.iti]:w-full [&_.iti__flag-container]:z-10 text-black">
                <input 
                  type="tel" 
                  ref={phoneInputRef}
                  placeholder="Contact No"
                  className="w-full h-[42px] border border-[#d1d1d1] bg-white px-[15px] outline-none focus:border-[#C8021A] transition-colors placeholder-[#a0a0a0] text-black text-[14.5px]"
                />
              </div>
            </div>

            
            <input 
              type="text" 
              placeholder="Subject"
              className="w-full h-[42px] border border-[#d1d1d1] bg-white px-[15px] outline-none focus:border-[#C8021A] transition-colors placeholder-[#a0a0a0] text-black text-[14.5px]"
            />

            
            <textarea 
              placeholder="Your Message"
              className="w-full h-[130px] border border-[#d1d1d1] bg-white p-[15px] outline-none resize-y focus:border-[#C8021A] transition-colors placeholder-[#a0a0a0] text-black text-[14.5px]"
              required
            ></textarea>

            
            <div className="flex flex-col mt-[5px]">
              <label className="text-[14px] font-semibold text-black mb-[8px]">
                Answer the security question <span className="text-[#C8021A]">*</span>
              </label>
              <div className="flex items-center gap-[10px]">
                
               
                <span className="text-[15px] text-black font-medium">
                  {mounted ? `${num1} + ${num2} = ` : 'Loading...'}
                </span>
                
                <input
                  type="text"
                  className="w-[60px] h-[35px] bg-[#ffffff] border border-[#d1d1d1] focus:border-[#C8021A] transition-colors outline-none px-2 text-center text-black"
                  value={userAnswer}
                  onChange={(e) => setAnswer(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex justify-center mt-[10px]">
              <button 
                type="submit" 
                className="bg-[#C8021A] text-white text-[15.5px] font-medium py-[10px] px-[65px] rounded-[4px] hover:bg-[#a00013] transition-colors"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </div>
    </main>
  );
}