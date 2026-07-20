"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import LangSwitcher from "./lang-switcher";

import logoImg from "../../../public/logo.png";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const params = useParams();
  
  const lang = (params?.lang as string) || "en";

  return (
    <header className="w-full bg-[#960808] relative z-50">
      
      {/* Container with justify-between */}
      <div className="max-w-[1140px] w-full mx-auto py-[10px] px-4 xl:px-0 min-h-[79.61px] flex items-center justify-between">
        <div className="flex items-center gap-[170px]">
        {/* 1. LEFT: Logo (Removed the wrapper div that was locking it to the nav) */}
        <Link href={`/${lang}`} className="flex items-center">
          <Image
            src={logoImg}
            alt="Caylo's Logo"
            className="w-[170px] h-auto object-contain"
            priority
            suppressHydrationWarning
          />
        </Link>

        {/* 2. MIDDLE: Navigation Links */}
        <nav className="flex items-center text-white font-bold text-[16px]">
          
          <Link href={`/${lang}`} className="block p-[15px] text-[#FFA700]">
            {t("home")}
          </Link>
          <Link href={`/${lang}/restaurants`} className="block p-[15px] hover:text-[#FFC700] transition-colors">
            {t("restaurants")}
          </Link>
          <Link href={`/${lang}/menu`} className="block p-[15px] hover:text-[#FFC700] transition-colors">
            {t("menu")}
          </Link>
          
          {/* Dropdown Menu */}
          <div className="relative group cursor-pointer">
            <span className="p-[15px] hover:text-[#FFC700] transition-colors flex items-center gap-1.5">
              {t("more")} 
                <div className="w-[8.75px] h-[14px] flex items-center justify-center">
              <FaChevronDown   className="" strokeWidth={4}/>
            </div>
            </span>
            
            <div className="absolute top-[100%] left-0 mt-[-5px] w-[150px] bg-white text-black font-normal rounded-md shadow-lg hidden group-hover:flex flex-col overflow-hidden">
              <Link href={`/${lang}/franchise`} className="block px-4 py-2.5 hover:bg-gray-100 hover:text-[#FFAF00] transition-colors">
                About Us
              </Link>
              <Link href={`/${lang}/franchise`} className="block px-4 py-2.5 hover:bg-gray-100 hover:text-[#FFAF00] transition-colors">
                Work at Caylo's
              </Link>
              <Link href={`/${lang}/franchise`} className="block px-4 py-2.5 hover:bg-gray-100 hover:text-[#FFAF00] transition-colors">
                Franchise
              </Link>
              <Link href={`/${lang}/contact`} className="block px-4 py-2.5 hover:bg-gray-100 hover:text-[#FFAF00] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
        </div>

        {/* 3. RIGHT: Language Button */}
        <div className="flex items-center justify-between w-[90px] h-[38px] px-3 bg-white cursor-pointer duration-200 rounded-sm">
          <LangSwitcher />
        
         
        </div>
        
      </div>
    </header>
  );
}