import { HeroSlider } from "@/components/HeroSlider";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { About } from "@/components/About";
import { Branches } from "@/components/Branches";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <main className="flex-grow flex flex-col font-sans">
      <HeroSlider />
      <Services />
      <WhyChooseUs />
      <About />
      <Reviews />
      <Branches />
    </main>
  );
}
