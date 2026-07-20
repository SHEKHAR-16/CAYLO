export default function Testimonials() {
  return (
   
    <section className="w-full max-w-[1950px] mx-auto h-[357.594px] bg-white flex flex-col items-center py-[64px] overflow-hidden">
      
      <div className="w-full mx-[140px] flex flex-col items-center justify-center max-w-[1200px]">
        
        {/* SECTION HEADING (Now using the Lato stack!) */}
        <h2 className="font-['Lato',_'Helvetica_Neue',_Arial,_Verdana,_sans-serif] text-black text-[30px] font-normal mb-8">
          Our Testimonials
        </h2>

        {/* THE QUOTE CONTAINER */}
        <div className="flex flex-row items-start justify-center gap-2 md:gap-6 max-w-4xl w-full">
          
          {/* Left Quote Mark */}
          <span className="text-5xl md:text-7xl font-serif text-gray-300 leading-none mt-2">
            “
          </span>

          {/* Center Text Block */}
          <div className="flex flex-col text-center px-4">
            
            {/* Title (Now using the Lato stack!) */}
            <h3 className="font-['Lato',_'Helvetica_Neue',_Arial,_Verdana,_sans-serif] text-[28px] font-bold italic text-gray-800 mb-4">
              Great Food, Excellent Service & Spotless Cleanliness
            </h3>
            
            {/* Paragraph (Now using the Lato stack!) */}
            <p className="font-['Lato',_'Helvetica_Neue',_Arial,_Verdana,_sans-serif] text-[18px] italic text-gray-600 mb-4 leading-relaxed">
              Very good food. Good service and nice staff. The room was nice and clean, the tables and the toilet were clean. Will go here again and recommend to try.
            </p>
            
            {/* Author Name (Now using the Lato stack!) */}
            <span className="font-['Lato',_'Helvetica_Neue',_Arial,_Verdana,_sans-serif] text-[#C8021A] text-[16px]">
              Emil Åleskjær
            </span>
            
          </div>

          {/* Right Quote Mark */}
          <span className="text-5xl md:text-7xl font-serif text-gray-300 leading-none mt-auto">
            ”
          </span>

        </div>
        
      </div>
    </section>
  );
}