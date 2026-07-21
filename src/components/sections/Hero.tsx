import Image from "next/image";

export default function Hero() {
  return (
    <>
    <section 
      className="w-full min-h-screen pt-32 pb-16 flex items-center justify-center overflow-hidden bg-[#C8021A] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/yellow-splash.jpg')" }}
    >
      <div className="w-full h-full mx-auto max-w-7xl px-0 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
       
       <div className="relative -mt-[58px] ml-[65px] flex flex-col text-white w-[570px] h-[392.891px] z-10 origin-top-left scale-[0.95]">
          
          
          <h4 className="block w-full font-barlow text-[48px] font-semibold uppercase text-white tracking-[-1px] [text-shadow:0px_0px_10px_rgb(0,0,0,0.65)] leading-tight">
            Taste Our Delicious
          </h4>
          
          <h1 className="mt-[5px] font-chewy font-medium text-[#FFA700] text-[45px] md:text-[68px] leading-[50px] md:leading-tight">
            <span className="whitespace-nowrap">Chicken Burger Only</span>
            <span className="block -mt-2 md:-mt-4 text-[#FFA700]">at Caylo's!</span>
          </h1>
          
          
          <p className="mt-[18px] font-['Mulish',_sans-serif] w-full text-[15px] font-normal tracking-tight text-white leading-[1.6]">
            Although we are new to the market, we are already dedicated to providing <br className="hidden md:block" />
            unforgettable taste experiences with our selection of chicken dishes. At Caylo's, <br className="hidden md:block" />
            we are passionate about serving the highest quality chicken, made with the <br className="hidden md:block" />
            freshest ingredients and prepared with love. Our goal is to create a new favorite <br className="hidden md:block" />
            among chicken lovers, and we strive to offer a unique experience that makes our <br className="hidden md:block" />
            customers return time and time again. Welcome to Caylo's – your new destination <br className="hidden md:block" />
            for amazing chicken!
          </p>
        
        </div>

        
        <div className="relative w-full h-[600px] md:h-[600px] flex items-center justify-center">
          <div className="relative -top-8 -left-9 z-10 w-full scale-[0.9]">
            <img
              src="/images/burger.png"
              alt="Delicious Chicken Burger"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
    </>
  );
}