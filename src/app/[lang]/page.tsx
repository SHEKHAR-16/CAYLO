import Testimonials from "../../components/sections/Testimonials";
import Hero from "../../components/sections/Hero"; 
import SecondSection from "../../components/sections/SecondSection";
import Franchise from "@/components/sections/Franchise";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <SecondSection />
      <Testimonials />
      <Franchise />
    </main>
  );
}