"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { Button } from "./Button";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    // Call it initially in case the page is loaded already scrolled
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Navbar is transparent at the top, and gets a blur background when scrolled
  const isTransparent = !scrolled && pathname === "/";
  const navBackground = isTransparent && !isMobileMenuOpen
    ? "bg-transparent border-transparent" 
    : "bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm";
  
  const textColor = isTransparent && !isMobileMenuOpen ? "text-white" : "text-gray-900";
  const hoverColor = "hover:text-[var(--color-primary)]";
  
  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 flex flex-col`}>
        {/* Top Notification Bar */}
        {showTopBar && (
          <div className="w-full bg-[var(--color-primary)] text-white text-xs md:text-sm py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 sm:gap-0 pr-6">
              <div className="flex items-center gap-2 font-medium tracking-wide">
                <span className="flex text-yellow-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                <span>4.5 Google Rating</span>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-3 font-medium tracking-wide opacity-90 text-[11px] sm:text-xs md:text-sm">
                <a href="tel:+918409122919" className="hover:text-yellow-300 transition-colors">8409122919</a>
                <span className="hidden sm:inline">|</span>
                <a href="tel:+919263516115" className="hover:text-yellow-300 transition-colors">9263516115</a>
                <span className="hidden sm:inline">|</span>
                <a href="tel:+919241651890" className="hover:text-yellow-300 transition-colors">9241651890</a>
              </div>
            </div>
            <button 
              onClick={() => setShowTopBar(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
              aria-label="Close notification"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}

        {/* Main Navbar */}
        <div className={`w-full transition-all duration-300 ${navBackground}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20 relative">
            
            {/* Mobile Hamburger (Left side on mobile) */}
            <div className="flex items-center md:hidden order-1">
              <button 
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`${textColor} ${hoverColor} focus:outline-none p-2 cursor-pointer transition-colors`}
                aria-label="Toggle menu"
              >
                <svg className="h-8 w-8 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Logo (Right side on mobile, Left on desktop) */}
            <div className="flex-shrink-0 flex items-center order-2 md:order-1">
              <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <Image 
                  src="/logo.png" 
                  alt="Olivia Spa Logo" 
                  width={160} 
                  height={60} 
                  className={`object-contain h-12 md:h-16 w-auto transition-all duration-300 ${isTransparent && !isMobileMenuOpen ? 'drop-shadow-md' : 'drop-shadow-sm'}`}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Menu (Hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-8 order-2">
              <Link href="/" className={`${textColor} ${hoverColor} font-medium tracking-wide transition-colors ${isTransparent ? 'drop-shadow-md' : ''}`}>Home</Link>
              <Link href="/#services" className={`${textColor} ${hoverColor} font-medium tracking-wide transition-colors ${isTransparent ? 'drop-shadow-md' : ''}`}>Services</Link>
              <Link href="/why-choose-us" className={`${textColor} ${hoverColor} font-medium tracking-wide transition-colors ${isTransparent ? 'drop-shadow-md' : ''}`}>Why Choose Us</Link>
              <Link href="/#about" className={`${textColor} ${hoverColor} font-medium tracking-wide transition-colors ${isTransparent ? 'drop-shadow-md' : ''}`}>About</Link>
              <Link href="/reviews" className={`${textColor} ${hoverColor} font-medium tracking-wide transition-colors ${isTransparent ? 'drop-shadow-md' : ''}`}>Reviews</Link>
              <Link href="/#branches" className={`${textColor} ${hoverColor} font-medium tracking-wide transition-colors ${isTransparent ? 'drop-shadow-md' : ''}`}>Branches</Link>
              <Link href="/#contact" className={`${textColor} ${hoverColor} font-medium tracking-wide transition-colors ${isTransparent ? 'drop-shadow-md' : ''}`}>Contact</Link>
              <Button 
                variant="primary" 
                className="ml-4 uppercase tracking-wider text-sm shadow-lg"
                href="https://wa.me/918409122919?text=Hi%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20spa%20and%20physiotherapy%20services.%20Please%20share%20the%20available%20treatments%2C%20timings%2C%20and%20consultation%20details.%20Thank%20you%21"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown & Overlay (Controlled via React State) */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col pt-28">
          {/* Overlay to catch outside clicks */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Menu Box */}
          <div className="relative bg-white w-full shadow-2xl border-t border-gray-100 flex flex-col items-center px-4 pt-4 pb-8 space-y-1 animate-in slide-in-from-top-2">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center text-gray-800 font-semibold text-lg py-3 hover:bg-gray-50 hover:text-[var(--color-primary)] rounded-lg transition-colors">Home</Link>
            <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center text-gray-800 font-semibold text-lg py-3 hover:bg-gray-50 hover:text-[var(--color-primary)] rounded-lg transition-colors">Services</Link>
            <Link href="/why-choose-us" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center text-gray-800 font-semibold text-lg py-3 hover:bg-gray-50 hover:text-[var(--color-primary)] rounded-lg transition-colors">Why Choose Us</Link>
            <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center text-gray-800 font-semibold text-lg py-3 hover:bg-gray-50 hover:text-[var(--color-primary)] rounded-lg transition-colors">About</Link>
            <Link href="/reviews" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center text-gray-800 font-semibold text-lg py-3 hover:bg-gray-50 hover:text-[var(--color-primary)] rounded-lg transition-colors">Reviews</Link>
            <Link href="/#branches" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center text-gray-800 font-semibold text-lg py-3 hover:bg-gray-50 hover:text-[var(--color-primary)] rounded-lg transition-colors">Branches</Link>
            <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center text-gray-800 font-semibold text-lg py-3 hover:bg-gray-50 hover:text-[var(--color-primary)] rounded-lg transition-colors">Contact</Link>
            <div className="pt-6 w-full px-6 relative z-50">
              <Button 
                variant="primary" 
                className="w-full uppercase tracking-widest py-4 relative z-50"
                href="https://wa.me/918409122919?text=Hi%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20spa%20and%20physiotherapy%20services.%20Please%20share%20the%20available%20treatments%2C%20timings%2C%20and%20consultation%20details.%20Thank%20you%21"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
