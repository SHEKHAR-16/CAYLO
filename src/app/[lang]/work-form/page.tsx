"use client";

import React, {useState, useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/dist/css/intlTelInput.css";

export default function WorkForm() {

  
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
    <main className="w-full min-h-screen bg-white pb-[60px] pt-[10px] px-[20px] font-['Source_Sans_Pro',_sans-serif]">
      
      
      <h1 className="font-['Lato',_sans-serif] text-center font-bold text-[50px]  text-black mb-[16px]">
        Work at Caylo's
      </h1>

      
      <div className="max-w-[1100px] ml-[360px] mr-auto  flex flex-col md:flex-row shadow-[0_0_15px_rgba(0,0,0,0.05)]">
        
       
        <aside className="w-full md:w-[400px] shrink-0 bg-[#BF2130] text-white pt-[20px] px-[25px] pb-[40px]">
          <h2 className="text-[30px] font-medium mb-[15px]">
            Why join Caylo's?
          </h2>
          
          <ul className="flex flex-col gap-[25px]">
            <li className="flex items-start gap-[12px]">
             
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[23px] h-[24px] shrink-0 mt-[2px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-[13px] font-medium leading-[1.4]">
                We provide career development opportunities within the company.
              </span>
            </li>

            <li className="flex items-start gap-[15px]">
             
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px] shrink-0 mt-[2px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-[15px] font-medium leading-[1.4]">
                We provide career development opportunities within the company.
              </span>
            </li>
            
            <li className="flex items-start gap-[15px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[23px] h-[26px] shrink-0 mt-[2px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-[13px] font-medium leading-[1.4]">
                Flexible working hours
              </span>
            </li>
            
            <li className="flex items-start gap-[15px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[23px] h-[26px] shrink-0 mt-[2px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-[13px] font-medium leading-[1.4]">
                A safe and supportive work environment
              </span>
            </li>
          </ul>
        </aside>

       
        <div className="flex-1 bg-[#f4f4f4] pt-[50px] px-[10px] pb-[40px]">
          <form className="font-['Lato',_sans-serif]  flex flex-col gap-[25px]" onSubmit={handleSubmit}>
            
           
            <div className="flex flex-col sm:flex-row gap-[20px]">
           
              <div className="flex-1 flex flex-col">
                <label className="text-[16px] font-semibold text-black mb-[12px]">
                  Name <span className="text-[#C8021A]">*</span>
                </label>
                <input 
                  type="text" 
                  className="w-full h-[40px] border border-[#d1d1d1] bg-white px-[12px] outline-none focus:border-[#C8021A] transition-colors"
                  required 
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label className="text-[16px] font-semibold text-black mb-[12px]">
                  Phone
                </label>
                 <div className="w-full [&_.iti]:w-full [&_.iti__flag-container]:z-10 text-black">
                  <input 
                    type="tel" 
                    ref={phoneInputRef}
                    placeholder="081234 56789"
                    className="w-full h-[40px] border border-[#d1d1d1] bg-white px-[12px] outline-none focus:border-[#C8021A] transition-colors placeholder-[#b0b0b0] text-black"
                  />
                </div>
              </div>
            </div>

          
            <div className="flex flex-col sm:flex-row gap-[20px]">
              
              <div className="flex-1 flex flex-col">
                <label className="text-[16px] font-semibold text-black mb-[12px]">
                  Email <span className="text-[#C8021A]">*</span>
                </label>
                <input 
                  type="email" 
                  className="w-full h-[40px] border border-[#d1d1d1] bg-white px-[12px] outline-none focus:border-[#C8021A] transition-colors"
                  required 
                />
              </div>

              
              <div className="flex-1 flex flex-col">
                <label className="text-[16px] font-semibold text-black mb-[12px]">
                  Location
                </label>
                <div className="relative w-full h-[40px]">
                  <select className="w-full h-full border border-[#d1d1d1] bg-white px-[12px] outline-none appearance-none cursor-pointer focus:border-[#C8021A] transition-colors text-black">
                    <option value="drammen">Drammen</option>
                    <option value="oslo">Tønsberg</option>
                  </select>
                  <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="text-[9px] text-gray-500">▼</span>
                  </div>
                </div>
              </div>
            </div>

           
            <div className="flex flex-col">
              <label className="text-[16px] font-semibold text-black mb-[12px]">
                Comment or Message
              </label>
              <textarea 
                className="w-full h-[120px] border border-[#d1d1d1] bg-white p-[12px] outline-none resize-y focus:border-[#C8021A] transition-colors"
              ></textarea>
            </div>

           
            <div className="flex flex-col">
              <label className="text-[16px] font-semibold text-black mb-[12px]">
                Your CV/Resume
              </label>
              <div className="w-full h-[100px] border border-[#d1d1d1] bg-white flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                <input type="file" id="cv-upload" className="hidden" />
                <label htmlFor="cv-upload" className="flex flex-col items-center cursor-pointer w-full h-full justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[28px] h-[28px] text-gray-400 mb-[8px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <span className="text-[14px] text-[#666666]">Click or drag a file to this area to upload</span>
                </label>
              </div>
            </div>

            
            <div className="flex flex-col mt-[5px]">
              <label className="text-[16px] font-semibold text-black mb-[12px]">
                Answer the security question <span className="text-[#C8021A]">*</span>
              </label>
              <div className="flex items-center gap-[10px]">
                <span className="text-[15px] text-black">
                 {mounted ? `${num1} + ${num2} = ` : 'Loading...'}
                </span>
                
                <input
                  type="text"
                  className="w-[70px] h-[40px] bg-[#ffffff] border border-[#d1d1d1] focus:border-[#C8021A] transition-colors outline-none px-2 text-center text-black"
                  value={userAnswer}
                  onChange={(e) => setAnswer(e.target.value)}
                  required
                />
              </div>
            </div>

            
            <div className="flex justify-center mt-[15px]">
              <button 
                type="submit" 
                className=" bg-[#C8021A] text-white text-[18px] font-medium py-[10px] px-[50px]  hover:bg-[#a00013] transition-colors rounded-lg"
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