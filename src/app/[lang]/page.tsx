import Hero from "../../components/sections/Hero"; 
import SecondSection from "../../components/sections/SecondSection";
import Testimonials from "@/components/sections/testimonials";
import Franchise from "@/components/sections/Franchise";
import ContactForm from "@/components/sections/contact-form";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <SecondSection />
      <Testimonials />
      <Franchise />
      <ContactForm />
      
    </main>
  );
}