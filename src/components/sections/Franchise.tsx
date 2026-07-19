import Image from "next/image";

export default function Franchise() {
  return (
   
    <section className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center py-16 overflow-hidden">
     <Image 
        src="/franchise-bg.png" 
        alt="Franchise Background"
        fill
        className="object-cover object-top z-0"
        quality={100}
      />
      
      {/* 💡 THE DARK OVERLAY BOX */}
      {/* 'relative z-10' is crucial here! It forces this dark box to sit ON TOP of the image */}
     <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8">
        
        <h2 className="text-white text-3xl md:text-4xl font-serif italic mb-2">
          Join the Caylo's Family
        </h2>
        
        <h3 className="text-white text-2xl md:text-3xl font-black italic tracking-wide mb-6">
          Franchise Opportunities Available
        </h3>
        
        <p className="text-gray-300 text-sm md:text-[15px] font-['Mulish',_sans-serif] leading-[1.8] mb-8 max-w-[500px]">
          Become a part of Caylo's, Norway's top burger and fried chicken brand. With our proven model and full support, you can bring our exceptional taste to your community. Join us today and start your journey to success with Caylo's!
        </p>

        {/* THE APPLY BUTTON */}
        <button className="w-fit bg-[#FF7A00] hover:bg-[#e66d00] transition-colors text-black font-bold text-[11px] md:text-xs uppercase px-5 py-2.5 rounded-full flex items-center gap-2">
          <span className="bg-black text-[#FF7A00] rounded-full p-1 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </span>
          Apply Today
        </button>

      </div>
    </section>
  );
}