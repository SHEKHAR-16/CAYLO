"use client";

import{ useState, useEffect } from "react"; 
export default function ContactForm() {
    const [num1, setNum1] = useState(3);
    const [num2, setNum2] = useState(4);
    const [mounted, setMounted] = useState(false);

    const [userAnswer, setAnswer] =useState("");

    const generateMathQuestion = () => {
       setNum1(Math.floor(Math.random() * 10 ) +1);
       setNum2(Math.floor(Math.random() * 10 ) +1);
    }

    useEffect(() => {
        generateMathQuestion();
        setMounted(true);
    }, []);

    const handleSubmit = (e: React.FormEvent)  => {
        e.preventDefault();
        
        const correctAnswer =num1 + num2;
        if (parseInt (userAnswer) !== correctAnswer) {
            alert(`Incorrect security answer! please try again.`);
            generateMathQuestion();
            return; 
        }
        alert("Form submitted successfully ! the math was correct.");
    };
  return (
    <section className="relative z-20 w-full bg-[#FCCC4C] flex flex-col items-center justify-center m-h-[751.781px] pt-[80px] pb-[50px] overflow-hidden">
      
      <h2 className="w-full max-w-[1120px] h-[32px] font-['Roboto',_sans-serif] text-[32px] text-[#000000] text-center font-bold tracking-[1px] flex items-center justify-center mb-[20px]">
        Let us know about your experience in our restaurants !
      </h2>
      
      <p className="w-full max-w-[403.19px] min-h-[48px] font-['Roboto',_sans-serif] text-[16px] text-[#000000] text-center mb-[14.4px] leading-tight">
        Do you have any questions? Or do you have any ideas?
        <br />
        Let us know so we can improve!
      </p>

     
      <form onSubmit={handleSubmit} className="w-full max-w-[1120px] h-auto flex flex-col mt-[40px] p-[10px]">
        
       
        <div className="w-full flex flex-col md:flex-row justify-between w-full">
          
          <div className="flex flex-col w-full max-w-[359.98px]">
            
            <label className="block font-bold not-italic break-words font-['Lato',_sans-serif] text-[#000000] text-[16px] mb-[8px]">
              Your Name <span className="text-[#d63637]">*</span>
            </label>
            <input 
              type="text" 
              className="w-full h-[45px] bg-[#ffffff]  border border-[#BD9939] outline-none px-3 font-['Lato',_sans-serif] text-[16px] text-black" 
            />
          </div>

          <div className="flex flex-col w-full max-w-[359.98px]">
            <label className="block font-bold not-italic break-words font-['Lato',_sans-serif] text-[#000000] text-[16px] mb-[8px]">
              Email <span className="text-[#d63637]">*</span>
            </label>
            <input 
              type="email" 
              className="w-full h-[45px] bg-[#ffffff] border border-[#BD9939] outline-none px-3 font-['Lato',_sans-serif] text-[16px] text-black" 
            />
          </div>

          <div className="flex flex-col w-full max-w-[359.98px]">
            <label className="block font-bold not-italic break-words font-['Lato',_sans-serif] text-[#000000] text-[16px] mb-[8px]">
              Subject <span className="text-[#d63637]">*</span>
            </label>
            <input 
              type="text" 
              className="w-full h-[45px] bg-[#ffffff] border border-[#BD9939] outline-none px-3 font-['Lato',_sans-serif] text-[16px] text-black" 
            />
          </div>

        </div>

       
        <div className="w-full flex flex-col mt-[24px]">
          <label className="block font-bold not-italic break-words font-['Lato',_sans-serif] text-[#000000] text-[16px] mb-[8px]">
            Your Message <span className="text-[#d63637]">*</span>
          </label>
          <textarea 
            className="w-full h-[120.39px] bg-[#ffffff] border border-[#BD9939] outline-none p-3 font-['Lato',_sans-serif] text-[16px] text-black resize-none"
          ></textarea>
        </div>

        
        <div className="w-full flex flex-col mt-[24px]">
          <label className="block font-bold not-italic break-words font-['Lato',_sans-serif] text-[#000000] text-[16px] mb-[8px]">
            Answer the security question <span className="text-[#d63637]">*</span>
          </label>
          <div className="flex items-center gap-2 font-['Lato',_sans-serif] text-[16px] text-black">
           
            <span className="block font-bold not-italic break-words">
              {mounted ? `${num1} + ${num2}` : ''}
            </span>
            <input
              type="text"
              className="w-[60px] h-[35px] bg-[#ffffff] border border-[#BD9939] outline-none px-2 text-center"
              value={userAnswer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
        </div>

       
        <div className="w-full mt-[24px]">
          <button type="submit" className="w-[170px] h-[41px] bg-[#bf2130] hover:bg-[#8f1515] transition-colors text-white font-['Lato',_sans-serif] text-[16px] px-[15px] rounded-[10px] flex items-center justify-center">
            Submit
          </button>
        </div>

      </form>

    </section>
  );
}