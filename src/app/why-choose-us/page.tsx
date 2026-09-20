import Image from "next/image";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function WhyChooseUsPage() {
  return (
    <main className="flex-grow flex flex-col font-sans bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
            alt="Relaxing Spa Environment" 
            fill 
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 tracking-wide drop-shadow-lg">
            Why Choose Us
          </h1>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-100 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Discover the exceptional qualities that make Olivia Spa the premier destination for your wellness and relaxation.
          </p>
        </div>
      </section>

      {/* Main Content Component */}
      <WhyChooseUs />
      
    </main>
  );
}
