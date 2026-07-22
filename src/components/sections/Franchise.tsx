import Image from "next/image";

export default function Franchise() {
  return (
    
    <section className="w-full max-w-[1950px] mx-auto h-[487px] overflow-hidden relative flex items-center justify-center">
      
      
      <Image 
        src="/franchise-bg.png" 
        alt="Franchise Background"
        fill
        className="object-cover object-top z-0"
        quality={100}
      />
      
      
      <div className="relative z-10 w-full max-w-[1725px] mx-auto px-4 md:px-0 flex justify-start items-stretch">
        
       
        <div className="bg-[#0a0a0a]/90 flex px-[25px] py-[50px]">
          
          
          <div className="flex flex-col justify-center">
            
            <h2 className="font-agbalumo italic text-white text-[30px] font-normal mb-2 leading-tight">
              Join the Caylo's Family
            </h2>
            
            <h2 className="font-agbalumo italic text-white text-[30px] font-normal mb-6 leading-tight">
              Franchise Opportunities Available
            </h2>
            
            
            <p className="w-full max-w-[933.25px] min-h-[48px] font-[-apple-system,_BlinkMacSystemFont,_sans-serif] text-gray-300 text-[16px] leading-[1.8] mb-8">
              Become a part of Caylo's, Norway's top burger and fried chicken brand. With our proven model and full support, you can bring our exceptional taste to your community. Join us today and start your journey to success with Caylo's!
            </p>

            <button className="w-fit bg-[#FF760F] hover:bg-[#e66a0d] transition-colors text-black font-['Poppins',_sans-serif] font-bold text-[15px] uppercase py-[12px] px-[30px] rounded-full flex items-center gap-2">
              <span className="bg-black text-[#FF760F] rounded-full p-1 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </span>
              Apply Today
            </button>

          </div>
          
        </div>

      </div>
    </section>
  );
}