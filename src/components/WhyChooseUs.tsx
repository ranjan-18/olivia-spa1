import Link from "next/link";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Luxurious Experience",
      description: "Indulge in a peaceful atmosphere designed for your relaxation and rejuvenation.",
      icon: (
        <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Certified Staff",
      description: "Our skilled and certified therapists are dedicated to providing top-notch services just for you.",
      icon: (
        <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Custom Packages",
      description: "Enjoy flexible packages that fit your needs and budget without compromising quality.",
      icon: (
        <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Top Hygiene",
      description: "Experience a hygienic and safe environment with clean, well-maintained facilities.",
      icon: (
        <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Tranquil Environment",
      description: "Relax in our tranquil interiors designed to enhance your comfort and peace of mind.",
      icon: (
        <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6 tracking-wide">Why Choose Us</h2>
          <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Discover the exceptional qualities that make Olivia Spa the premier destination for your wellness and relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 rounded-2xl p-10 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                {reason.icon}
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-4 font-bold group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light text-lg">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            href="https://wa.me/918409122919?text=Hi%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20spa%20and%20physiotherapy%20services.%20Please%20share%20the%20available%20treatments%2C%20timings%2C%20and%20consultation%20details.%20Thank%20you%21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full bg-[var(--color-primary)] text-white font-semibold uppercase tracking-widest text-sm hover:bg-emerald-600 hover:shadow-lg transition-all duration-300"
          >
            Book Your Experience
          </Link>
        </div>
      </div>
    </section>
  );
}
