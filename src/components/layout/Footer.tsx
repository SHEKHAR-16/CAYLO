import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      
      {/* 💡 MAIN DARK AREA */}
      <div className="w-full bg-[#000000] pt-[60px] pb-[70px] flex justify-center px-4">
        
        {/* The 1120px wrapper from previous sections to keep it perfectly aligned */}
        <div className="w-full max-w-[1120px] grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          
          {/* COLUMN 1: Logo, About, & Socials */}
          <div className="flex flex-col">
            <Image 
              src="/Logo.png" 
              alt="Caylo's"
              width={237}
              height={111}
              className="mb-[20px] w-[237px] h-[111px]"
            />
            <p className="font-['Roboto',_sans-serif] text-[#ffffff] text-[15px] leading-[1.8] mb-[25px] pr-4">
              At Caylo's, we're passionate about serving up the finest chicken burgers. Now, you can bring this taste sensation to your own community by becoming a Caylo's franchisee.
            </p>
            
            <div className="flex items-center gap-[10px]">
              {/* Facebook */}
              <a href="#" className="w-[35px] h-[35px] bg-[#3b5998] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <svg className="w-6 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Twitter */}
              <a href="#" className="w-[35px] h-[35px] bg-[#1da1f2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-[35px] h-[35px] bg-[#ff0000] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-[35px] h-[35px] bg-[#444444] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: Menu Links */}
          <div className="flex flex-col">
            <h3 className="font-['Roboto',_sans-serif] text-white text-[20px] font-bold mb-[25px]">
              Menu
            </h3>
            <ul className="flex flex-col gap-[12px]">
              {['Home', 'Restaurants', 'Menu', 'Franchise', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="group font-['Roboto',_sans-serif] text-[#ffffff] text-[15px] hover:text-[#bf2130] transition-colors flex items-center gap-[8px]">
                    <FaAngleDoubleRight className="text-white w-4 h-4 group-hover:text-[#bf2130] transition-colors"/> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Contact Email */}
          <div className="flex flex-col">
            <h3 className="font-['Roboto',_sans-serif] text-white text-[22px] font-bold mb-[25px]">
              Contact for Franchisee
            </h3>
            <a href="mailto:caylos@caylos.no" className="font-['Roboto',_sans-serif] text-[#ffffff] text-[15px] hover:text-[#bf2130] transition-colors flex items-center gap-[10px]">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
              caylos@caylos.no
            </a>
          </div>

        </div>
      </div>

      {/* 💡 BOTTOM LIGHT BAR */}
      <div className="w-full bg-[#f0f0f0] min-h-[50px] flex items-center justify-center px-4">
        <p className="font-['Roboto',_sans-serif] text-[#333333] text-[14px]">
          @ 2026 Caylo's. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}