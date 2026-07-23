"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams, usePathname } from "next/navigation";
import LangSwitcher from "./lang-switcher";

import logoImg from "../../../public/logo.png";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";


export default function Navbar() {
  const t = useTranslations("Navigation");
  const params = useParams();
  
  
  const pathname = usePathname();
  
  const lang = (params?.lang as string) || "en";
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(lang);
  const otherLang = currentLang === "en" ? "no" : "en";
  const folderPath = "/";

  return (
    <header className="w-full bg-[#960808] relative z-50">
      
    
      <div className="max-w-[1140px] w-full mx-auto px-4 xl:px-0 flex items-center justify-between transition-all duration-300 min-h-[80px] py-[15.5px]">
        <div className="flex items-center gap-[170px]">
        
        <Link href={`/${lang}`} className="flex items-center">
          <Image
            src={logoImg}
            alt="Caylo's Logo"
            className="w-[170px] h-auto object-contain -mt-[5px]"
            priority
            suppressHydrationWarning
          />
        </Link>

        <nav className="flex items-center text-white font-bold text-[16px]">
          
          
          <Link 
            href={`/${lang}`} 
            className={`block p-[15px] transition-colors ${
              pathname === `/${lang}` || pathname === "/" 
                ? "text-[#FFA700]" 
                : "text-white hover:text-[#FFC700]"
            }`}
          >
            {t("home")}
          </Link>

          <Link 
            href={`/${lang}/restaurants`} 
            className={`block p-[15px] transition-colors ${
              pathname.includes("/restaurants") 
                ? "text-[#FFA700]" 
                : "text-white hover:text-[#FFC700]"
            }`}
          >
            {t("restaurants")}
          </Link>

          <Link 
            href={`/${lang}/menu`} 
            className={`block p-[15px] transition-colors ${
              pathname.includes("/menu") 
                ? "text-[#FFA700]" 
                : "text-white hover:text-[#FFC700]"
            }`}
          >
            {t("menu")}
          </Link>
          
          <div className="relative group cursor-pointer">
            <span className={`p-[16px] transition-colors flex items-center gap-3 ${
              pathname.includes("/franchise") || pathname.includes("/contact")
                ? "text-[#FFA700]"
                : "text-white hover:text-[#FFC700]"
            }`}>
              {t("more")} 
              <div className="flex items-center justify-center">
                <FaChevronDown className="w-2 h-3 text-current" />
              </div>
            </span>
            
            <div className="absolute top-[100%] left-0 mt-[-5px] w-[150px] bg-white text-black font-normal rounded-md shadow-lg hidden group-hover:flex flex-col overflow-hidden">
              <Link href={`/${lang}/franchise`} className="block px-4 py-2.5 hover:bg-gray-100 hover:text-[#FFAF00] transition-colors">
                About Us
              </Link>
              <Link href={`/${lang}/work-form`} className="block px-4 py-2.5 hover:bg-gray-100 hover:text-[#FFAF00] transition-colors">
                Work at Caylo's
              </Link>
              <Link href={`/${lang}/franchise`} className="block px-4 py-2.5 hover:bg-gray-100 hover:text-[#FFAF00] transition-colors">
                Franchise
              </Link>
              <Link href={`/${lang}/contact-form`} className="block px-4 py-2.5 hover:bg-gray-100 hover:text-[#FFAF00] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
        </div>

        <div className="relative group w-[100px] h-[47px] mr-[5px]">
       
          <div className="flex items-center justify-between w-full h-full pl-[28px] pr-[20px] pt-[5px] pb-[3px] border-[1px] border-[#cccccc] bg-white cursor-pointer ">
           <Image
              src={`${folderPath}en.png`}
              alt="English"
              width={28}
              height={18}
              className="w-[18px] h-auto "
            />
            <FaChevronDown className="w-2 h-3 text-black" />
            </div>

        <div 
         onClick={() => {
          setCurrentLang(otherLang);
         }}    
        className="flex items-center justify-between w-full h-full pl-[28px] pr-[20px] pt-[5px] pb-[3px] border-[1px] border-[#cccccc] bg-white cursor-pointer hidden group-hover:flex hover:bg-gray-100 transition-colors">
          
            <Image
              src={`${folderPath}no.png`}
              alt="Norwegian"
              width={28}
              height={18}
              className="w-[18px] h-auto "
            />

        </div>
       </div>
        
      </div>
    </header>
  );
}