import Image from "next/image";
import Link from "next/link";

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 tracking-wide">Our Premium Services</h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Indulge in our carefully curated selection of massages designed to restore your physical and mental well-being.
          </p>
        </div>

        <div className="flex flex-col space-y-16">
          {[
            {
              title: "Dry Thai Massage",
              image: "/hero1.png",
              prices: { sixty: "₹2000", thirty: "₹1500" },
              benefits: "Enhances flexibility and increases joint mobility through stretching.",
              hygiene: "Fresh towels, sterilized equipments",
              description: "Dry Thai massage is a traditional therapy combining yoga-like stretches and acupressure techniques without oils, performed on a mat. It helps release tension and enhance energy flow."
            },
            {
              title: "Swedish Massage",
              image: "/hero2.png",
              prices: { sixty: "₹2500", thirty: "₹1500" },
              benefits: "Promotes relaxation, improves flexibility and relieves muscle tension.",
              hygiene: "Fresh towels, sterilized equipments",
              description: "Swedish Massage offers a soothing full-body treatment to ease tension, improve circulation, and enhance well-being. With gentle strokes and kneading, it relieves stress and leaves you revitalized."
            },
            {
              title: "Deep Tissue Massage",
              image: "/hero3.png",
              prices: { sixty: "₹3000", thirty: "₹2000" },
              benefits: "Provides chronic pain relief and reduces tension in deeper layers.",
              hygiene: "Fresh towels, sterilized equipments",
              description: "Deep tissue massage targets deeper muscle layers to relieve chronic pain, stiffness, and injuries. Using slow, firm pressure, it breaks down knots and eases tension in problem areas."
            },
            {
              title: "Aroma Massage",
              image: "/hero4.png",
              prices: { sixty: "₹2300", thirty: "₹1500" },
              benefits: "Enhances emotional well-being and relaxation through essential oils.",
              hygiene: "Fresh towels, sterilized equipments",
              description: "Aroma massage blends massage therapy with the therapeutic benefits of essential oils. Using gentle strokes and aromatic oils like lavender, it promotes relaxation, reduces stress, and enhances mood."
            }
          ].map((service, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row bg-white rounded-3xl shadow-sm hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-700">
              
              {/* Left Side: Image Header with Hover Animation */}
              <div className="relative w-full md:w-5/12 h-80 md:h-auto overflow-hidden border-b md:border-b-0 md:border-r border-gray-100">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
                  unoptimized 
                />
              </div>
              
              {/* Right Side: Editorial Content Body */}
              <div className="w-full md:w-7/12 p-8 md:p-14 lg:p-16 flex flex-col justify-center bg-gray-50/30">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start mb-6 gap-4">
                  <h3 className="font-serif text-4xl text-gray-900 group-hover:text-[var(--color-primary)] transition-colors duration-500">
                    {service.title}
                  </h3>
                  <div className="flex flex-row xl:flex-col items-center xl:items-end gap-4 xl:gap-1 bg-white xl:bg-transparent px-5 py-2 xl:p-0 rounded-full xl:rounded-none shadow-sm xl:shadow-none border xl:border-0 border-gray-100">
                    <span className="text-gray-900 font-bold text-xl">{service.prices.sixty} <span className="text-xs text-gray-500 font-medium tracking-wider">/ 60 MIN</span></span>
                    <span className="hidden xl:inline text-gray-300"></span>
                    <span className="text-gray-600 font-semibold text-lg">{service.prices.thirty} <span className="text-xs text-gray-400 font-medium tracking-wider">/ 30 MIN</span></span>
                  </div>
                </div>
                
                <div className="w-16 h-[2px] bg-[var(--color-primary)] mb-8 opacity-70"></div>
                
                <p className="text-gray-600 leading-relaxed mb-10 text-lg font-light max-w-3xl">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  <div className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:border-[var(--color-primary)]/20 transition-colors duration-500">
                    <span className="text-[var(--color-primary)] mb-3 text-2xl">✦</span>
                    <strong className="font-semibold text-gray-900 tracking-widest uppercase text-xs mb-2">Benefits</strong>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.benefits}</p>
                  </div>
                  <div className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group-hover:border-[var(--color-primary)]/20 transition-colors duration-500">
                    <span className="text-[var(--color-primary)] mb-3 text-2xl">✧</span>
                    <strong className="font-semibold text-gray-900 tracking-widest uppercase text-xs mb-2">Hygiene</strong>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.hygiene}</p>
                  </div>
                </div>
                
                <div>
                    <Link 
                      href="https://wa.me/918409122919?text=Hi%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20spa%20and%20physiotherapy%20services.%20Please%20share%20the%20available%20treatments%2C%20timings%2C%20and%20consultation%20details.%20Thank%20you%21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-10 py-4 rounded-full border-[1px] border-[var(--color-primary)] text-[var(--color-primary)] font-semibold uppercase tracking-widest text-sm hover:bg-[var(--color-primary)] hover:text-white hover:shadow-lg transition-all duration-300"
                    >
                      Reserve This Therapy
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
