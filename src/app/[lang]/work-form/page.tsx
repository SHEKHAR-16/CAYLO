"use client";

import React from "react";

export default function WorkForm() {
  return (
    <main className="w-full min-h-screen bg-white pb-[60px] pt-[40px] px-[20px] font-['Source_Sans_Pro',_sans-serif]">
      
      
      <h1 className="text-center font-bold text-[36px] tracking-wide text-black mb-[40px]">
        Work at Caylo's
      </h1>

      
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row shadow-[0_0_15px_rgba(0,0,0,0.05)]">
        
       
        <aside className="w-full md:w-[380px] shrink-0 bg-[#C8021A] text-white pt-[50px] px-[40px] pb-[40px]">
          <h2 className="text-[26px] font-medium mb-[30px]">
            Why join Caylo's?
          </h2>
          
          <ul className="flex flex-col gap-[25px]">
            <li className="flex items-start gap-[15px]">
             
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px] shrink-0 mt-[2px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-[15px] font-medium leading-[1.4]">
                We provide career development opportunities within the company.
              </span>
            </li>
            
            <li className="flex items-start gap-[15px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px] shrink-0 mt-[2px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-[15px] font-medium leading-[1.4]">
                Flexible working hours
              </span>
            </li>
            
            <li className="flex items-start gap-[15px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px] shrink-0 mt-[2px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-[15px] font-medium leading-[1.4]">
                A safe and supportive work environment
              </span>
            </li>
          </ul>
        </aside>

       
        <div className="flex-1 bg-[#f4f4f4] pt-[50px] px-[40px] pb-[40px]">
          <form className="flex flex-col gap-[25px]" onSubmit={(e) => e.preventDefault()}>
            
           
            <div className="flex flex-col sm:flex-row gap-[20px]">
           
              <div className="flex-1 flex flex-col">
                <label className="text-[14px] font-semibold text-black mb-[8px]">
                  Name <span className="text-[#C8021A]">*</span>
                </label>
                <input 
                  type="text" 
                  className="w-full h-[40px] border border-[#d1d1d1] bg-white px-[12px] outline-none focus:border-[#C8021A] transition-colors"
                  required 
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label className="text-[14px] font-semibold text-black mb-[8px]">
                  Phone
                </label>
                <div className="flex w-full h-[40px] border border-[#d1d1d1] bg-white focus-within:border-[#C8021A] transition-colors">
                  <div className="flex items-center px-[10px] bg-white border-r border-[#d1d1d1] cursor-pointer">
                    <span className="text-[16px]">🇮🇳</span>
                    <span className="text-[9px] text-gray-500 ml-[6px]">▼</span>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="081234 56789"
                    className="flex-1 h-full px-[12px] outline-none bg-transparent placeholder-[#b0b0b0]"
                  />
                </div>
              </div>
            </div>

          
            <div className="flex flex-col sm:flex-row gap-[20px]">
              
              <div className="flex-1 flex flex-col">
                <label className="text-[14px] font-semibold text-black mb-[8px]">
                  Email <span className="text-[#C8021A]">*</span>
                </label>
                <input 
                  type="email" 
                  className="w-full h-[40px] border border-[#d1d1d1] bg-white px-[12px] outline-none focus:border-[#C8021A] transition-colors"
                  required 
                />
              </div>

              
              <div className="flex-1 flex flex-col">
                <label className="text-[14px] font-semibold text-black mb-[8px]">
                  Location
                </label>
                <div className="relative w-full h-[40px]">
                  <select className="w-full h-full border border-[#d1d1d1] bg-white px-[12px] outline-none appearance-none cursor-pointer focus:border-[#C8021A] transition-colors text-black">
                    <option value="drammen">Drammen</option>
                    <option value="oslo">Oslo</option>
                    <option value="bergen">Bergen</option>
                  </select>
                  <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="text-[9px] text-gray-500">▼</span>
                  </div>
                </div>
              </div>
            </div>

           
            <div className="flex flex-col">
              <label className="text-[14px] font-semibold text-black mb-[8px]">
                Comment or Message
              </label>
              <textarea 
                className="w-full h-[120px] border border-[#d1d1d1] bg-white p-[12px] outline-none resize-y focus:border-[#C8021A] transition-colors"
              ></textarea>
            </div>

           
            <div className="flex flex-col">
              <label className="text-[14px] font-semibold text-black mb-[8px]">
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
              <label className="text-[14px] font-semibold text-black mb-[12px]">
                Answer the security question <span className="text-[#C8021A]">*</span>
              </label>
              <div className="flex items-center gap-[10px]">
                <span className="text-[15px] text-black">2 + 14 = </span>
                <input 
                  type="text" 
                  className="w-[50px] h-[35px] border border-[#d1d1d1] bg-white px-[10px] text-center outline-none focus:border-[#C8021A] transition-colors"
                  required
                />
              </div>
            </div>

            
            <div className="flex justify-center mt-[15px]">
              <button 
                type="submit" 
                className="bg-[#C8021A] text-white text-[15px] font-medium py-[10px] px-[50px] rounded-[5px] hover:bg-[#a00013] transition-colors"
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