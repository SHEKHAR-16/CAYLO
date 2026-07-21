"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  
  const pathSegments = pathname.split("/");
  const currentLang = pathSegments[1] === "no" ? "no" : "en";

  const changeLanguage = (newLang: string) => {
    const segments = [...pathSegments];
    segments[1] = newLang;
    router.push(segments.join("/"));
    setIsOpen(false);
  };

  const folderPath = "/"; 

  return (
    <div className="relative inline-block text-left z-50">
      
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 bg-white/10 hover:bg-white/20 border border-white/20 p-2 rounded cursor-pointer transition"
      >
        <Image
          src={`${folderPath}${currentLang}.png`}
          alt={currentLang}
          width={28}
          height={18}
          className="w-auto h-auto object-contain rounded-sm"
          priority
          suppressHydrationWarning
        />
        <span className="text-white text-xs">▼</span>
      </button>

      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-16 bg-white rounded shadow-lg border border-gray-200 overflow-hidden flex flex-col items-center py-1">
          
          <button
            type="button"
            onClick={() => changeLanguage("en")}
            className="w-full hover:bg-gray-100 p-2 flex justify-center transition"
          >
            <Image
              src={`${folderPath}en.png`}
              alt="English"
              width={28}
              height={18}
              className="w-auto h-auto object-contain rounded-sm"
            />
          </button>

          <button
            type="button"
            onClick={() => changeLanguage("no")}
            className="w-full hover:bg-gray-100 p-2 flex justify-center transition"
          >
            <Image
              src={`${folderPath}no.png`}
              alt="Norwegian"
              width={28}
              height={18}
              className="w-auto h-auto object-contain rounded-sm"
            />
          </button>
          
        </div>
      )}
    </div>
  );
}