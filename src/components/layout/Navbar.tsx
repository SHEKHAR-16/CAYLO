"use client"; // 💡 FIX: Tells Next.js that this component uses browser features like useParams

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import LangSwitcher from "./lang-switcher";

import logoImg from "../../../public/logo.png";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const params = useParams();
  
  const lang = (params?.lang as string) || "en";

  return (
    <header className="w-full bg-[#960808] shadow-md">
      <div className="max-w-7xl mx-auto px-16 py-3 flex items-center justify-between">
        <div className="flex items-center gap-50">
          <Link href={`/${lang}`} className="flex items-center">
            <Image
              src={logoImg}
              alt="Caylo's Logo"
              className="w-[169px] h-auto object-contain"
              priority
              suppressHydrationWarning
            />
          </Link>
        

        {/* MIDDLE: Simple Navigation Links */}
        <nav className="flex items-center gap-7 text-white font-bold text-size-17 text-base">
          <Link href={`/${lang}`} className="text-[#FFC700]">
            {t("home")}
          </Link>
          <Link href={`/${lang}/restaurants`} className="hover:text-[#FFC700]">
            {t("restaurants")}
          </Link>
          <Link href={`/${lang}/menu`} className="hover:text-[#FFC700]">
            {t("menu")}
          </Link>
          <span className="hover:text-[#FFC700] cursor-pointer">{t("more")} ⌵</span>
        </nav>
        </div>

        {/* RIGHT: Language Button */}
        <div className="flex items-center">
          <LangSwitcher />
        </div>
        
      </div>
    </header>
  );
}

