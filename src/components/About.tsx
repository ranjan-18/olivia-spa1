export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-gray-50/50 border-t border-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Text & Stats */}
          <div className="w-full lg:w-5/12">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 tracking-wide">Our Story</h2>
            <div className="w-16 h-[2px] bg-[var(--color-primary)] mb-8 opacity-70"></div>
            
            <p className="text-xl text-gray-600 leading-relaxed font-light mb-12">
              We’re thrilled to have you here at <strong className="font-semibold text-gray-900">Olivia Spa N Physiotherapy</strong>. As a fully certified and licensed spa in Dhanbad, we believe in bringing unparalleled wellness, healing, and relaxation to your life.
            </p>
            
            <div className="flex flex-row gap-4">
              <div className="bg-white p-4 lg:p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center flex-1 hover:shadow-lg transition-shadow duration-300 group">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 flex items-center gap-1 group-hover:scale-110 transition-transform duration-300">
                  4.5<span className="text-yellow-400 drop-shadow-sm text-2xl lg:text-3xl">★</span>
                </div>
                <span className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-widest text-center">User Rating</span>
              </div>
              <div className="bg-white p-4 lg:p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center flex-1 hover:shadow-lg transition-shadow duration-300 group">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  2022
                </div>
                <span className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-widest text-center">Established</span>
              </div>
              <div className="bg-white p-4 lg:p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center flex-1 hover:shadow-lg transition-shadow duration-300 group">
                <div className="text-3xl lg:text-4xl font-bold text-[var(--color-primary)] mb-2 group-hover:scale-110 transition-transform duration-300">
                  ✓
                </div>
                <span className="text-[10px] lg:text-xs font-bold text-gray-500 uppercase tracking-widest text-center">Certified Spa</span>
              </div>
            </div>
          </div>

          {/* Right: Animated Timeline */}
          <div className="w-full lg:w-7/12 py-10 lg:pl-10">
            <div className="relative border-l-[3px] border-gray-200 ml-4 md:ml-8 pl-10 md:pl-16 space-y-16">
              
              {/* CSS Animated Traveling Beam */}
              <div className="absolute left-[-2.5px] top-0 w-[4px] h-32 bg-gradient-to-b from-transparent via-[var(--color-primary)] to-transparent animate-journey rounded-full"></div>

              {/* Node 1: 2022 */}
              <div className="relative group">
                <div className="absolute -left-[53px] md:-left-[77px] top-1 w-6 h-6 rounded-full bg-white border-4 border-gray-300 group-hover:border-[var(--color-primary)] transition-colors duration-500"></div>
                <span className="text-[var(--color-primary)] font-bold tracking-widest text-sm uppercase block mb-1">2022</span>
                <h4 className="text-2xl font-serif text-gray-900">Humble Beginnings</h4>
                <p className="text-gray-600 mt-2 font-light text-lg">Started our journey bringing relaxation to the heart of City Centre, Dhanbad.</p>
              </div>

              {/* Node 2: 2023 */}
              <div className="relative group">
                <div className="absolute -left-[53px] md:-left-[77px] top-1 w-6 h-6 rounded-full bg-white border-4 border-gray-300 group-hover:border-[var(--color-primary)] transition-colors duration-500"></div>
                <span className="text-[var(--color-primary)] font-bold tracking-widest text-sm uppercase block mb-1">2023</span>
                <h4 className="text-2xl font-serif text-gray-900">Expanding our Reach</h4>
                <p className="text-gray-600 mt-2 font-light text-lg">Moved to Memco More, Dhanbad, upgrading our facilities and treatments to serve you better.</p>
              </div>

              {/* Node 3: Now */}
              <div className="relative group">
                {/* Pulsing Node for the current milestone */}
                <div className="absolute -left-[53px] md:-left-[77px] top-1 w-6 h-6 rounded-full bg-[var(--color-primary)] shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-pulse-node"></div>
                <span className="text-[var(--color-primary)] font-bold tracking-widest text-sm uppercase block mb-1">Now</span>
                <h4 className="text-2xl font-serif text-gray-900 text-[var(--color-primary)]">No. 1 Spa in Dhanbad</h4>
                <p className="text-gray-600 mt-2 font-light text-lg">Proud to be the top-rated, most trusted premium spa and physiotherapy destination in the city.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
