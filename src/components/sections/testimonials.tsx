export default function Testimonials() {
  return (
    <section className="w-full bg-white flex flex-col items-center py-16 mt-10">
      
      <div className="w-full mx-[140px] flex flex-col items-center justify-center max-w-[1200px]">
        
        {/* SECTION HEADING (Now using the Lato stack!) */}
        <h3 className="font-['Lato',_sans-serif] text-black text-[30px] md:text-[30px] font-black uppercase  mb-12">
          Our Testimonials
        </h3>

        {/* THE QUOTE CONTAINER */}
        <div className="flex flex-row items-start justify-center gap-2 md:gap-6 max-w-4xl w-full">
          
          {/* Left Quote Mark */}
          <span className="text-5xl md:text-7xl font-serif text-gray-300 leading-none mt-2">
            “
          </span>

          {/* Center Text Block */}
          <div className="flex flex-col text-center px-4">
            
            {/* Title (Now using the Lato stack!) */}
            <h3 className="font-['Lato',_'Helvetica_Neue',_Arial,_Verdana,_sans-serif] text-xl md:text-2xl font-bold italic text-gray-800 mb-4">
              Great Food, Excellent Service & Spotless Cleanliness
            </h3>
            
            {/* Paragraph (Now using the Lato stack!) */}
            <p className="font-['Lato',_'Helvetica_Neue',_Arial,_Verdana,_sans-serif] text-[15px] italic text-gray-600 mb-4 leading-relaxed">
              Very good food. Good service and nice staff. The room was nice and clean, the tables and the toilet were clean. Will go here again and recommend to try.
            </p>
            
            {/* Author Name (Now using the Lato stack!) */}
            <span className="font-['Lato',_'Helvetica_Neue',_Arial,_Verdana,_sans-serif] text-[#C8021A] font-bold text-sm uppercase">
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