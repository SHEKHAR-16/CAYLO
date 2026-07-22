"use client";

import Image from "next/image";
import Link from "next/link";

// 👇 MENU DATA: Edit this list to easily add, remove, or change food items!
const menuCategories = [
  {
    id: "fried-chicken",
    title: "Fried Chicken",
    items: [
      { name: "CLUBS", img: "/menu-images/fr1.jpg", desc: "", options: ["2", "3", "5"] },
      { name: "THIGHS", img: "/menu-images/fr2.jpg", desc: "", options: ["2", "3", "5"] },
      { name: "WINGS", img: "/menu-images/fr3.jpg", desc: "", options: ["6", "10", "15", "30"] },
      { name: "CRISPY TENDERS", img: "/menu-images/fr4.jpg", desc: "", options: ["3", "6", "10", "15"] },
    ]
  },
  {
    id: "burger",
    title: "Burgers",
    items: [
      { name: "CAY'S CLASSIC", img: "/menu-images/b1.jpg", desc: "(Chicken fillet, lettuce, tomato, cheese and mayo) (H, E, M)", options: [] },
      { name: "SALSA CHICK", img: "/menu-images/b2.jpg", desc: "(Chicken fillet, lettuce, tomato, salsa, sour cream dressing and nachos) (H, M)", options: [] },
      { name: "EL DORADO", img: "/menu-images/b3.jpg", desc: "(Chicken fillet, Coleslaw, Red onion, Golden honey and Cheddar) (H, E, M, SP)", options: [] },
      { name: "SPICED UP", img: "/menu-images/b4.jpg", desc: "Chicken fillet, Lettuce, Red onion, Jalapenos, Chilimayo and Cheddar", options: [] },
      { name: "CHICKEN BBQ", img: "/menu-images/b5.jpg", desc: "(Chicken fillet, Lettuce, BBQ, pickels and red onion ) (H, E, M)", options: [] },
      { name: "CAY'S SUB", img: "/menu-images/b6.jpg", desc: "(Chicken fillet, lettuce, Tomato, Mayo and Cheddar) (H, E, M)", options: [] },
      { name: "MOZZARELLA SUB", img: "/menu-images/b7.jpg", desc: "(Mozzarella, Pesto, Tomato and Ruccola) (H, E, N)", options: [] },
      { name: "HALLOUMI SUB", img: "/menu-images/b2.jpg", desc: "(Grilled halloumi, lettuce, tomato, chilimayo og pickled red onion) (H, M, E, SS)", options: [] },
    ]
  },
 {
  id: "chicken-meals",
  title: "Chicken Meals",
  items: [
    { name: "SMALL BOX", img: "/menu-images/cm-1.jpg", desc: "1 Club, 1 thigh, fries, sauce (H)", options: [] },
    { name: "MEDIUM BOX", img: "/menu-images/cm2.jpg", desc: "1 Club, 1 thigh, 2 wings, fries, sauce (H)", options: [] },
    { name: "LARGE BOX", img: "/menu-images/cm3.jpg", desc: "2 Clubs, 1 thigh, 3 wings, 2 tenders, fries, sauce (H)", options: [] },
    { name: "DUO PACK", img: "/menu-images/cm4.jpg", desc: "4 Clubs, 2 thighs, 6 wings, 4 tenders, 2 fries, 2 sauces (H)", options: [] },
    { name: "FAMILY PACK", img: "/menu-images/cm5.jpg", desc: "4 Clubs, 4 thighs, 10 wings, 6 tenders, 3 fries, 3 sauces (H)", options: [] },
    { name: "PARTY PACK", img: "/menu-images/cm6.jpg", desc: "6 Clubs, 6 thighs, 15 wings, 10 tenders, 4 fries, 4 sauces (H)", options: [] },
  ]
},
{
  id: "Junior Menu",
  title: "Junior Menu",
  items: [
    { name: "JUNIOR MENU", img: "/menu-images/jm1.png", desc: "2 tenders, fries and a juiceboks.", options: [] },
  ]
},
{
  id: "Sides",
  title: "Sides",
  items: [
    { name: "Fries", img: "/menu-images/s1.jpg", desc: "", options: [] },
    { name: "Sweet Potato Fries", img: "/menu-images/s2.jpg", desc: "", options: [] },
    { name: "Coleslaw", img: "/menu-images/s3.jpg", desc: "", options: [] },
    { name: "Onion Rings", img: "/menu-images/s4.jpg", desc: "", options: [] },
    { name: "Mozzarella Sticks", img: "/menu-images/s5.jpg", desc: "", options: [] },
    { name: "Dirty Fries", img: "/menu-images/s6.jpg", desc: "", options: [] },
  ]
},
{
  id: "Sauces",
  title: "Sauces",
  items: [
    { name: "Mayo", img: "/menu-images/sa1.jpg", desc: "", options: [] },
    { name: "Golden Honey Dip", img: "/menu-images/sa2.jpg", desc: "", options: [] },
    { name: "BBQ", img: "/menu-images/sa3.jpg", desc: "", options: [] },
    { name: "Chili Mayo", img: "/menu-images/sa4.jpg", desc: "", options: [] },
    { name: "Cheddar", img: "/menu-images/sa5.jpg", desc: "", options: [] },
    { name: "Garlic Dip", img: "/menu-images/sa6.jpg", desc: "", options: [] },
    { name: "Sweet Chili Dip", img: "/menu-images/sa7.jpg", desc: "", options: [] },
  ]
},
{
  id: "Drinks",
  title: "Drinks",
  items: [
    { name: "Cola", img: "/menu-images/d1.jpg", desc: "", options: [] },
    { name: "Cola Zero", img: "/menu-images/d2.jpg", desc: "", options: [] },
    { name: "MER", img: "/menu-images/d3.jpg", desc: "", options: [] },
    { name: "Mountain Dew", img: "/menu-images/d4.jpg", desc: "", options: [] },
    { name: "Fanta", img: "/menu-images/d5.jpg", desc: "", options: [] },
    { name: "Fanta Exotic", img: "/menu-images/d6.jpg", desc: "", options: [] },
    { name: "Sprite", img: "/menu-images/d7.jpg", desc: "", options: [] },
    { name: "Bonaqua", img: "/menu-images/d8.jpg", desc: "", options: [] },
  ]
},
{
  id: "Dessert",
  title: "Dessert",
  items: [
    { name: "Vanilla Milkshake", img: "/menu-images/de1.png", desc: "", options: [] },
    { name: "Strawberry Milkshake", img: "/menu-images/de2.png", desc: "", options: [] },
    { name: "Chocolate Milkshake", img: "/menu-images/de3.jpg", desc: "", options: [] },
    { name: "Caramel Milkshake", img: "/menu-images/de4.png", desc: "", options: [] },
  ]
},
];

export default function Menu() {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full max-w-[1905px] mx-auto min-h-screen flex bg-white">
      
  
      <aside className="hidden lg:block w-[406.5px] min-w-[406.5px] shrink-0 bg-[#F3EFE0] border-r border-[#e5e5e5] z-10">
        
       
        <div className="flex flex-col sticky top-[100px] h-[calc(100vh-100px)] overflow-y-auto pt-[26px] pl-[30px] pr-[10px] items-start">
          
          <button onClick={() => scrollToSection('fried-chicken')} className="w-fit text-left font-['Source_Sans_Pro',_sans-serif] font-[600] text-[15.5px] uppercase tracking-wider text-black py-[20px] px-[30px] hover:bg-[#C8021A] hover:text-white transition-colors rounded-sm">
            FRIED CHICKEN                                                    
          </button>
          <button onClick={() => scrollToSection('burger')} className="w-fit text-left font-['Source_Sans_Pro',_sans-serif] font-[600] text-[15.5px] uppercase tracking-wider text-black py-[20px] px-[30px] hover:bg-[#C8021A] hover:text-white transition-colors rounded-sm">
            BURGER
          </button>
          <button onClick={() => scrollToSection('chicken-meals')} className="w-fit text-left font-['Source_Sans_Pro',_sans-serif] font-[600] text-[15.5px] uppercase tracking-wider text-black py-[20px] px-[30px] hover:bg-[#C8021A] hover:text-white transition-colors rounded-sm">
            CHICKEN MEALS
          </button>
          <button onClick={() => scrollToSection('Junior Menu')} className="w-fit text-left font-['Source_Sans_Pro',_sans-serif] font-[600] text-[15.5px] uppercase tracking-wider text-black py-[20px] px-[30px] hover:bg-[#C8021A] hover:text-white transition-colors rounded-sm">
            JUNIOR MENU
          </button>
          <button onClick={() => scrollToSection('Sides')} className="w-fit text-left font-['Source_Sans_Pro',_sans-serif] font-[600] text-[15.5px] uppercase tracking-wider text-black py-[20px] px-[30px] hover:bg-[#C8021A] hover:text-white transition-colors rounded-sm">
            SIDES
          </button>
          <button onClick={() => scrollToSection('Sauces')} className="w-fit text-left font-['Source_Sans_Pro',_sans-serif] font-[600] text-[15.5px] uppercase tracking-wider text-black py-[20px] px-[30px] hover:bg-[#C8021A] hover:text-white transition-colors rounded-sm">
            SAUCES
          </button>
          <button onClick={() => scrollToSection('Drinks')} className="w-fit text-left font-['Source_Sans_Pro',_sans-serif] font-[600] text-[15.5px] uppercase tracking-wider text-black py-[20px] px-[30px] hover:bg-[#C8021A] hover:text-white transition-colors rounded-sm">
            DRINKS
          </button>
          <button onClick={() => scrollToSection('Dessert')} className="w-fit text-left font-['Source_Sans_Pro',_sans-serif] font-[600] text-[15.5px] uppercase tracking-wider text-black py-[20px] px-[30px] hover:bg-[#C8021A] hover:text-white transition-colors rounded-sm">
            DESSERT
          </button>

        </div>
      </aside>

   
      <section className="flex-1 bg-white px-[40px] pt-[15px] pb-[30px]">
        
        <div className="w-full max-w-[1550px] mx-auto">
          {menuCategories.map((category) => (
            <div key={category.id} id={category.id} className="mb-[50px]">
              
              <h2 className="font-['Agbalumo',_sans-serif] text-[25px] text-center mb-[28px] tracking-wide text-black">
                {category.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[25px] w-fit mx-auto">
                
                {category.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="w-[345.11px] h-[422.09px] bg-white border border-[#E2E2E2] rounded-[10px] p-[20px] flex flex-col items-center text-center hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300 group"
                  >
                    
                    <div className="w-full h-[250px] shrink-0 relative mb-[15px] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-full h-full object-contain scale-[1.1]"
                        onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/315x315?text=Food+Image" }}
                      />
                    </div>

                    <div className="flex flex-col grow w-full items-center justify-start">
                      
                      <h3 className="font-semibold text-[18px] font-['apple-system',_sans-serif] uppercase tracking-wide mb-[5px] text-black">
                        {item.name}
                      </h3>

                      {item.desc && (
                        <p className="text-[12px] text-[#777777] leading-[1.5] px-[5px] mb-[15px]">
                          {item.desc}
                        </p>
                      )}

                  
                      {item.options && item.options.length > 0 && (
                        <div className="flex gap-[11px] justify-center mt-auto pt-[10px]">
                          {item.options.map((pcs, i) => (
                            <div 
                              key={i} 
                              className="border-[1.5px] border-solid border-[#444444] rounded-[4px] w-[39px] h-[42px] flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors text-black"
                            >
                              <span className="font-bold text-[15px] leading-none mb-[2px]">{pcs}</span>
                              <span className="text-[10px] font-bold leading-none">pcs</span>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>

                  </div>
                ))}

              </div>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}