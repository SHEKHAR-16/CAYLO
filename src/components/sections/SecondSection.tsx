export default function SecondSection() {
  return (
    <section className="w-full bg-[#1c1c1c] py-20 px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        
     
        <div className="flex items-center w-full mb-12 max-w-[900px]">
          <div className="h-[2px] bg-white flex-1"></div>
          <span className="text-white font-barlow font-bold tracking-widest px-6 uppercase text-sm md:text-base">
            Have it your way
          </span>
          <div className="h-[2px] bg-white flex-1"></div>
        </div>

        
        <div className="w-full grid grid-cols-1 md:grid-cols-3 min-h-[450px]">
          
          {/* Column 1: The Image */}
          <div className="w-full h-[300px] md:h-full relative">
            <img 
              src="./burger-about.png" 
              alt="Caylo's Meal Box" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Column 2: Our Menus (White Background) */}
          <div className="bg-white p-10 md:p-14 flex flex-col justify-center">
            {/* The small underlined text */}
            <h3 className="font-barlow text-[22px] font-bold uppercase tracking-wide underline decoration-black decoration-[3px] underline-offset-4 mb-2">
              Our
            </h3>
            {/* The giant text */}
            <h2 className="font-barlow text-[40px] md:text-[50px] font-black uppercase leading-none mb-6">
              Menus
            </h2>
            {/* The paragraph */}
            <p className="font-['Mulish',_sans-serif] text-[14px] text-black leading-[1.8] font-semibold">
              Our menus are carefully selected to best suit your needs. We take pride in serving ingredients of the highest quality to ensure that every meal meets our high standards of quality and ethical practices.
            </p>
          </div>

          {/* Column 3: Order Delivery (Light Gray Background) */}
          <div className="bg-[#e6e6e6] p-10 md:p-14 flex flex-col justify-center">
            {/* The small underlined text */}
            <h3 className="font-barlow text-[22px] font-bold uppercase tracking-wide underline decoration-black decoration-[3px] underline-offset-4 mb-2">
              Order
            </h3>
            {/* The giant text */}
            <h2 className="font-barlow text-[40px] md:text-[50px] font-black uppercase leading-none mb-6">
              Delivery
            </h2>
            {/* The paragraph */}
            <p className="font-['Mulish',_sans-serif] text-[14px] text-black leading-[1.8] font-semibold mb-8">
              Enjoy the convenience of our delivery service right to your doorstep. Ordering from us is easy; simply choose your favorite dishes from our menu, place your order online, and relax while we take care of the rest 🙂
            </p>
            
            {/* Delivery App Icons */}
            <div className="flex space-x-4">
              {/* Wolt Icon */}
              <div className="w-16 h-16 bg-[#00c8ff] rounded-2xl flex items-center justify-center overflow-hidden">
                <img src="./wolt.png" alt="Wolt" className="w-full h-full object-cover" /> {/* ⚠️ Update path! */}
              </div>
              {/* Foodora Icon */}
              <div className="w-16 h-16 bg-[#d70f64] rounded-2xl flex items-center justify-center overflow-hidden">
                <img src="./foodora.jpg" alt="Foodora" className="w-full h-full object-cover" /> {/* ⚠️ Update path! */}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}