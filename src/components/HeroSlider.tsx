import Image from "next/image";
import { Button } from "./Button";

const images = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
  "/hero4.png"
];

// Add a clone of the first image at the end for a seamless infinite loop
const trackImages = [...images, images[0]];

export function HeroSlider() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      
      {/* Sliding Track (100% Pure CSS - Bypasses any JS/React hydration issues) */}
      <div className="flex h-full w-[500%] animate-slider">
        {trackImages.map((src, index) => (
          <div key={`${src}-${index}`} className="relative h-full w-1/5 flex-shrink-0">
            <Image
              src={src}
              alt={`Olivia Spa Hero ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* Overlay with Content */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col items-start justify-center text-left px-8 sm:px-16 md:px-24 pointer-events-none">
        <div className="max-w-3xl mt-20 pointer-events-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-6 drop-shadow-xl tracking-wide leading-tight">
            Feel Better,<br/>Live Better
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 mb-10 drop-shadow-lg font-light tracking-wide max-w-2xl">
            Relax, heal, and feel your best with our spa and physiotherapy services in Dhanbad.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button 
              variant="primary" 
              className="text-sm md:text-base px-10 py-4 uppercase tracking-widest shadow-xl"
              href="https://wa.me/918409122919?text=Hi%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20spa%20and%20physiotherapy%20services.%20Please%20share%20the%20available%20treatments%2C%20timings%2C%20and%20consultation%20details.%20Thank%20you%21"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
