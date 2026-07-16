import Image from "next/image";

export default function Hero() {
  return (
    <>
    {/* 💡 FIX: Applied the background image and red color directly to the section! */}
    <section 
      className="w-full min-h-screen pt-32 pb-16 flex items-center justify-center overflow-hidden bg-[#C8021A] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/yellow-splash.jpg')" }}
    >
      <div className="w-full h-full mx-auto max-w-7xl px-0 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        
        {/* 1. LEFT COLUMN: Text Content */}
        <div className="relative -top-12 left-12  flex flex-col text-white space-y-2 max-w-[700px] z-10">
          <span className="font-barlow text-[36px] md:text-[42px] font-semibold uppercase text-white [text-shadow:0px_0px_10px_rgb(0,0,0,0.65)] leading-tight">
            Taste Our Delicious
          </span>
         <h1 className="font-chewy font-medium text-[#FFA700] text-[45px] md:text-[68px] leading-[50px] md:leading-tight">
            <span className="whitespace-nowrap">Chicken Burger Only</span>
            <span className="block -mt-4 md:-mt-8 text-[#FFA700]">at Caylo's!</span>
          </h1>
           {/* 💡 FIX: Added the explicit sans-serif fallback directly into the font class! */}
  <p className="font-['Mulish',_sans-serif]  text-[15px] font-normal text-white leading-[1.8] pt-4">
    Although we are new to the market, we are already dedicated to providing <br className="hidden md:block" />
    unforgettable taste experiences with our selection of chicken dishes. At Caylo's, <br className="hidden md:block" />
    we are passionate about serving the highest quality chicken, made with the <br className="hidden md:block" />
    freshest ingredients and prepared with love. Our goal is to create a new favorite <br className="hidden md:block" />
    among chicken lovers, and we strive to offer a unique experience that makes our <br className="hidden md:block" />
    customers return time and time again. Welcome to Caylo's – your new destination <br className="hidden md:block" />
    for amazing chicken!
  </p>
        </div>

        {/* 2. RIGHT COLUMN: Foreground Floating Burger Image */}
        <div className="relative w-full h-[600px] md:h-[600px] flex items-center justify-center">
    
          {/* 💡 FIX: Removed the background img div entirely. Just the beautiful burger remains! */}
          <div className="relative -top-8 -left-9 z-10 w-full scale-[0.9]  hover:scale-[1.35] ">
            <img
              src="/images/burger.png"
              alt="Delicious Chicken Burger"
              className="w-full h-auto object-contain "
            />
          </div>

        </div>

      </div>
    </section>
    </>
  );
}