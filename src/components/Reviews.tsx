"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";

export function Reviews() {
  const reviews = [
    { name: "Aarti Sharma", date: "2 weeks ago", rating: 5, text: "The best spa experience I've had in Dhanbad! The staff is incredibly professional, and the ambiance is very relaxing. I highly recommend their deep tissue massage." },
    { name: "Rahul Verma", date: "1 month ago", rating: 5, text: "Very hygienic and well-maintained facility. The therapists are certified and know exactly what they are doing. Will definitely be visiting again soon." },
    { name: "Priya Singh", date: "2 months ago", rating: 5, text: "A truly luxurious experience. From the moment you step in, you feel at peace. The aroma massage helped me relieve all my work stress. Outstanding service!" },
    { name: "Vikash Kumar", date: "3 months ago", rating: 5, text: "Excellent service and very polite staff. The rooms are clean and the overall vibe is extremely calming. Best physiotherapy center as well!" },
    { name: "Sneha Gupta", date: "3 months ago", rating: 5, text: "I tried the Swedish massage and it was phenomenally relaxing. They use high-quality oils and maintain top hygiene standards." },
    { name: "Amit Patel", date: "4 months ago", rating: 5, text: "Very professional spa in Dhanbad. The dry Thai massage helped me get rid of chronic back pain. Highly trained therapists." },
    { name: "Neha Mishra", date: "5 months ago", rating: 5, text: "Peaceful environment, soft music, and perfect pressure during the massage. Exactly what I needed after a long week!" },
    { name: "Ravi Teja", date: "6 months ago", rating: 5, text: "Great value for money. The facilities are top-notch and the staff ensures you are comfortable throughout the session." },
    { name: "Anjali Das", date: "6 months ago", rating: 5, text: "Best spa near me! The aroma therapy was incredibly soothing. I felt completely rejuvenated and refreshed afterwards." },
    { name: "Suresh Reddy", date: "8 months ago", rating: 5, text: "Cleanest spa I've ever visited. The attention to detail and customer care here is just unmatched. 10/10 recommend." }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section id="reviews" className="py-24 px-6 md:px-12 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 tracking-wide">Customer Feedback</h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            See what our lovely customers have to say about their relaxing experiences at Olivia Spa.
          </p>
        </div>

        {/* Slideshow Container */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="overflow-hidden relative rounded-2xl shadow-sm border border-gray-100 bg-white">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, idx) => (
                <div key={idx} className="w-full flex-shrink-0 p-8 md:p-12 flex flex-col">
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-[var(--color-primary)] text-white flex items-center justify-center rounded-full font-bold text-2xl uppercase shadow-md">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">{review.name}</h4>
                        <p className="text-sm text-gray-400">{review.date}</p>
                      </div>
                    </div>
                    
                    <svg className="w-8 h-8" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>

                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed font-light text-xl italic flex-grow">
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Dots */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {reviews.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-[var(--color-primary)]' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Rate Us Button */}
        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-2 text-lg px-8 py-4 shadow-sm hover:shadow-md mx-auto"
            href="https://www.google.com/search?q=olivia+spa+reviews&oq=olivia+spa+reviews&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABgTGBYYHjIKCAIQABgTGBYYHjIKCAMQABgTGBYYHjIKCAQQABgTGBYYHjIKCAUQABgTGBYYHjIKCAYQABgTGBYYHjIKCAcQABgTGBYYHjIKCAgQABgTGBYYHjIKCAkQABgTGBYYHtIBCTQ4OTdqMGoxNagCCLACAfEFZRbKg_X7bi4&sourceid=chrome&source=chrome.rb&ie=UTF-8#sv=CAESzQEKuQEStgEKd0FKaVQ0dEl1dUJISUhyZWpVT2lsbWFDSUgxYmREc3JFclhoOWdlOXpvbi1TVXJ2bTZPUnl4WFY2RzBZMWRWTHVZcS1IYUhKM0J4UnFXVDlMTjZTQnZDVGxjV3ViV2JfTFVBSFNERjRKZVhHSW5aZDR2SWljeVVNEhdodE92YXBxN003S3podmNQb2ZhcG9BVRoiQURzcjlmU0pOb1Q5OFFpNXE3c1NfQVp6djBfdUJXNjBRZxIEODA1MRoBMyoAMAA4AUAAGAAg64a32gpKAhAB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Rate Us on</span>
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </Button>
        </div>

      </div>
    </section>
  );
}
