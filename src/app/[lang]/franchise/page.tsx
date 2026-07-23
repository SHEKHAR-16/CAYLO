"use client";

import React from "react";
import Link from "next/link";

export default function Franchise() {
  return (
    <main className="w-full font-['Source_Sans_Pro',_sans-serif] bg-white">
      
      
      <section
      className="w-full min-h-screen pt-32 pb-16 flex items-center justify-center overflow-hidden bg-[#C8021A] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/yellow-splash.jpg')" }}
    >
      
          
          <div className="absolute inset-0 bg-[#FFBA00] w-[150%] h-[150%] top-1/2 left-1/4 -translate-y-1/2 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10"></div>
           

        
        <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between px-[30px] md:px-[60px] py-[60px] z-10 relative">
          
         
          <div className="w-full md:w-[45%] flex flex-col items-start text-white mb-[50px] md:mb-0">
            <h1 className="text-[32px] md:text-[42px] font-bold uppercase tracking-wide leading-[1.1] mb-[5px]">
              Start your own Caylos today!
            </h1>
            <h2 className="font-['Agbalumo',_sans-serif] text-[#FFBA00] text-[55px] md:text-[75px] leading-none mb-[25px]">
              Franchise
            </h2>
            <p className="text-[15px] md:text-[16px] font-normal leading-[1.6] max-w-[520px] mb-[35px]">
              Ready to own a successful chicken restaurant? Join the Caylos family and bring
              our chicken to your community. With our support and a taste people love, you can
              open your own Caylos and start serving. Let's build something great together!
            </p>
            
            
            <Link href="#franchise-form">
              <button className="bg-[#FF7A00] text-black font-bold text-[15px] uppercase tracking-wider py-[12px] px-[32px] rounded-full flex items-center gap-[10px] hover:bg-[#e06b00] hover:scale-105 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16l4-4-4-4"></path>
                  <path d="M8 12h8"></path>
                </svg>
                Apply Now
              </button>
            </Link>
          </div>

          
          <div className="w-full md:w-[55%] flex justify-center md:justify-end relative z-10">
            <div className="relative w-[110%] max-w-[800px] right-0 md:right-[-50px]">
              <img 
                src="/images/fp1.png" 
                alt="Caylos Franchise Food" 
                className="w-full h-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.3)]"
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/800x600?text=Insert+Food+Image+Here" }}
              />
            </div>
          </div>
        </div>
      </section>

   
      <section className="w-full bg-white pt-[100px] pb-[80px] px-[30px] md:px-[60px]">
        <div className="max-w-[1200px] mx-auto">
          
         
          <div className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[80px] mb-[120px]">
            
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img 
                src="/images/fp2.jpg" 
                alt="Hand holding Caylos Burger" 
                className="w-full max-w-[450px] aspect-square object-cover rounded-[15px] shadow-sm"
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/500x500/FFBA00/ffffff?text=Burger+Hand+Image" }}
              />
            </div>
            
           
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <h3 className="text-[26px] md:text-[28px] font-bold text-black mb-[20px] leading-[1.3]">
                Join the Caylos Family: Franchise Opportunities
              </h3>
              <p className="text-[15px] md:text-[16px] text-[#333333] leading-[1.7]">
                Are you passionate about great food and exceptional customer service? Do you
                want to bring the best chicken burgers to your community? At Caylos, we're
                more than just a restaurant - we're a growing family. And now, you can be a part
                of our exciting journey by owning your very own Caylos franchise!
              </p>
            </div>
          </div>

          
          <div className="flex flex-col items-center">
            <h3 className="text-[26px] md:text-[28px] font-bold text-black mb-[60px] text-center">
              Why Franchise with Caylos?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] lg:gap-[40px]">
              
              
              <div className="flex flex-col items-center text-center">
                <div className="w-[65px] h-[65px] rounded-full border-[2px] border-[#25a83a] flex items-center justify-center text-[#25a83a] mb-[25px]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-[17px] font-bold text-black mb-[15px]">Proven Success</h4>
                <p className="text-[14px] text-[#555555] leading-[1.6]">
                  With our established brand and loyal
                  customer base, Caylos has become a
                  go-to spot for chicken burger lovers.
                  Our success in Drammen can be
                  yours, too!
                </p>
              </div>

             
              <div className="flex flex-col items-center text-center">
                <div className="w-[65px] h-[65px] rounded-full border-[2px] border-[#25a83a] flex items-center justify-center text-[#25a83a] mb-[25px]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[28px] h-[28px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-[17px] font-bold text-black mb-[15px]">Unique Menu</h4>
                <p className="text-[14px] text-[#555555] leading-[1.6]">
                  Our carefully crafted menu sets us
                  apart. From our signature chicken
                  burgers to our irresistible sides,
                  every item is made with quality and
                  passion.
                </p>
              </div>

              
              <div className="flex flex-col items-center text-center">
                <div className="w-[65px] h-[65px] rounded-full border-[2px] border-[#25a83a] flex items-center justify-center text-[#25a83a] mb-[25px]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-[17px] font-bold text-black mb-[15px]">Full-Scale Support</h4>
                <p className="text-[14px] text-[#555555] leading-[1.6]">
                  We're with you every step of the way.
                  From site selection to grand opening,
                  our experienced team provides all
                  the training, marketing, and
                  operational support you need.
                </p>
              </div>

              
              <div className="flex flex-col items-center text-center">
                <div className="w-[65px] h-[65px] rounded-full border-[2px] border-[#25a83a] flex items-center justify-center text-[#25a83a] mb-[25px]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-[32px] h-[32px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-[17px] font-bold text-black mb-[15px]">Community Focus</h4>
                <p className="text-[14px] text-[#555555] leading-[1.6]">
                  We believe in being a positive force
                  in the communities we serve. As a
                  franchisee, you'll have the
                  opportunity to make a meaningful
                  impact in your local area.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    
      <section id="franchise-form" className="w-full bg-[#ebebeb] flex justify-center py-[80px] px-[20px]">
        
       
        <div className="w-full max-w-[850px] bg-white rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-[30px] md:p-[50px]">
          
         
          <h2 className="text-[22px] font-bold text-black mb-[10px]">
            Franchising Form
          </h2>
          <p className="text-[14px] text-[#333333] leading-[1.6] mb-[35px]">
            Thank you for your interest in becoming a Caylos Franchisee! We're thrilled that you're considering joining the Caylos family. Please fill out the form below, and one of our franchise specialists will be in touch with you soon to discuss the next steps.
          </p>

          <form className="flex flex-col gap-[20px]" onSubmit={(e) => e.preventDefault()}>
            
            
            <div className="flex flex-col sm:flex-row gap-[20px]">
              <div className="flex-1 flex flex-col">
                <label className="text-[13px] font-semibold text-black mb-[6px]">
                  First Name <span className="text-[#C8021A]">*</span>
                </label>
                <input 
                  type="text" 
                  className="w-full h-[38px] border border-[#d1d1d1] rounded-[3px] bg-white px-[12px] outline-none focus:border-[#C8021A] transition-colors text-black"
                  required 
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-[13px] font-semibold text-black mb-[6px]">
                  Last Name <span className="text-[#C8021A]">*</span>
                </label>
                <input 
                  type="text" 
                  className="w-full h-[38px] border border-[#d1d1d1] rounded-[3px] bg-white px-[12px] outline-none focus:border-[#C8021A] transition-colors text-black"
                  required 
                />
              </div>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-[20px]">
              <div className="flex-1 flex flex-col">
                <label className="text-[13px] font-semibold text-black mb-[6px]">
                  Email <span className="text-[#C8021A]">*</span>
                </label>
                <input 
                  type="email" 
                  className="w-full h-[38px] border border-[#d1d1d1] rounded-[3px] bg-white px-[12px] outline-none focus:border-[#C8021A] transition-colors text-black"
                  required 
                />
              </div>
              
             
              <div className="flex-1 flex flex-col">
                <label className="text-[13px] font-semibold text-black mb-[6px]">
                  Phone <span className="text-[#C8021A]">*</span>
                </label>
                <div className="flex w-full h-[38px] border border-[#d1d1d1] rounded-[3px] bg-white focus-within:border-[#C8021A] transition-colors">
                  <div className="flex items-center px-[10px] bg-white border-r border-[#d1d1d1] cursor-pointer rounded-l-[3px]">
                    <span className="text-[16px]">🇮🇳</span>
                    <span className="text-[9px] text-gray-500 ml-[6px]">▼</span>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="081234 56789"
                    className="flex-1 h-full px-[12px] outline-none bg-transparent placeholder-[#b0b0b0] text-black rounded-r-[3px]"
                    required
                  />
                </div>
              </div>
            </div>

            
            <div className="flex flex-col sm:flex-row gap-[20px]">
              <div className="flex-1 flex flex-col">
                <label className="text-[13px] font-semibold text-black mb-[6px]">
                  Choose a theme
                </label>
                <div className="relative w-full h-[38px]">
                  <select className="w-full h-full border border-[#d1d1d1] rounded-[3px] bg-white px-[12px] outline-none appearance-none cursor-pointer focus:border-[#C8021A] transition-colors text-[#555555] text-[14px]">
                    <option value="how-can-i-open">How can i open?</option>
                    <option value="general">General Inquiry</option>
                    <option value="finance">Financial Requirements</option>
                  </select>
                  <div className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                    <span className="text-[10px] text-gray-400">▼</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-[13px] font-semibold text-black mb-[6px]">
                  Company Name <span className="text-[#C8021A]">*</span>
                </label>
                <input 
                  type="text" 
                  className="w-full h-[38px] border border-[#d1d1d1] rounded-[3px] bg-white px-[12px] outline-none focus:border-[#C8021A] transition-colors text-black"
                  required 
                />
              </div>
            </div>

           
            <div className="flex flex-col">
              <label className="text-[13px] font-semibold text-black mb-[6px]">
                Comment or Message <span className="text-[#C8021A]">*</span>
              </label>
              <textarea 
                className="w-full h-[120px] border border-[#d1d1d1] rounded-[3px] bg-white p-[12px] outline-none resize-y focus:border-[#C8021A] transition-colors text-black"
                required
              ></textarea>
            </div>

           
            <div className="flex flex-col mt-[10px]">
              <label className="text-[14px] font-bold text-black mb-[10px]">
                Authorization <span className="text-[#C8021A]">*</span>
              </label>
              
              <div className="flex items-start gap-[10px]">
                <input 
                  type="checkbox" 
                  id="authorization"
                  className="mt-[4px] w-[16px] h-[16px] cursor-pointer accent-[#C8021A]"
                />
                <label htmlFor="authorization" className="text-[13px] text-[#444444] leading-[1.5] cursor-pointer">
                  By submitting this form, I authorize Caylos and its service providers to contact me regarding franchisee opportunities and other franchisee-related information via email, phone, and/or text, including the use of automated dialing technology. I also consent to Caylos collecting and processing my personal information as outlined in the <Link href="/privacy" className="text-[#C8021A] underline underline-offset-2 hover:text-[#a00013]">Caylos Franchisee Privacy Statement.</Link>
                </label>
              </div>

              
              <div className="flex items-center gap-[6px] text-[#C8021A] text-[13px] mt-[10px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span>This field is required.</span>
              </div>
            </div>

            
            <div className="flex flex-col mt-[15px]">
              <label className="text-[13px] font-bold text-black mb-[10px]">
                Answer the security question <span className="text-[#C8021A]">*</span>
              </label>
              <div className="flex items-center gap-[8px]">
                <span className="text-[14px] text-black">3 + 5 = </span>
                <input 
                  type="text" 
                  className="w-[45px] h-[34px] border border-[#d1d1d1] rounded-[3px] bg-white px-[10px] text-center outline-none focus:border-[#C8021A] transition-colors text-black"
                  required
                />
              </div>
            </div>

            
            <div className="mt-[15px]">
              <button 
                type="submit" 
                className="bg-[#C8021A] text-white text-[14px] font-semibold py-[8px] px-[25px] rounded-[4px] hover:bg-[#a00013] transition-colors"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </section>

    </main>
  );
}