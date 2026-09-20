import Image from "next/image";

export function Branches() {
  const branches = [
    {
      name: "City Center Dhanbad",
      address: "Shop No:-128 Lower Ground Floor City Centre, Dhanbad Hirapur, Dhanbad - 826001 (Near Reliance Smart)",
      image: "/hero1.png",
      mapLink: "https://maps.app.goo.gl/SKrp7G3YRusTFyoSA"
    },
    {
      name: "Memco More Dhanbad",
      address: "Shop No 01, Memco More, Bhiphore Hirak Rd, Chanchani Colony, Dhanbad, Susnilewa, Jharkhand 826010",
      image: "/hero2.png",
      mapLink: "https://maps.app.goo.gl/GMLJGWuWFtKcMf6h7"
    }
  ];

  return (
    <section id="branches" className="py-24 px-6 md:px-12 bg-white border-t border-gray-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 tracking-wide">Our Branches</h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Visit us at any of our premium spa and physiotherapy centers across Dhanbad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {branches.map((branch, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
              {/* Image Container with static carousel UI hints */}
              <div className="relative w-full h-64 bg-gray-100">
                <Image src={branch.image} alt={branch.name} fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-black/10"></div>
                {/* Visual Arrow indicators (purely decorative to match design request) */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
                </div>
                <div className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-700"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                </div>
              </div>
              
              {/* Content Box */}
              <div className="p-8 md:p-12 flex flex-col flex-grow items-center text-center">
                <h3 className="font-serif text-3xl font-bold text-gray-800 mb-8">{branch.name}</h3>
                
                <p className="text-gray-900 text-xl leading-relaxed mb-10 max-w-sm">
                  {branch.address}
                </p>
                
                <div className="mt-auto w-full flex justify-center">
                  <a href={branch.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#4285F4] hover:bg-[#3367D6] text-white px-8 py-4 rounded-xl text-lg font-medium transition-colors duration-300 w-full max-w-xs shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
