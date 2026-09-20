import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 text-gray-700 py-20 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-16">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col space-y-6">
            <h3 className="font-serif text-4xl text-gray-900 tracking-wider">Olivia Spa</h3>
            <div className="w-16 h-1 bg-[var(--color-primary)] rounded-full"></div>
            <p className="text-gray-600 leading-relaxed font-light text-xl max-w-sm">
              Bringing Wellness Closer to You
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-2">Services</h4>
            <ul className="space-y-4 font-light text-lg text-gray-600">
              <li><Link href="#services" className="hover:text-[var(--color-primary)] transition-colors">Dry Thai Massage</Link></li>
              <li><Link href="#services" className="hover:text-[var(--color-primary)] transition-colors">Swedish Massage</Link></li>
              <li><Link href="#services" className="hover:text-[var(--color-primary)] transition-colors">Deep Tissue Massage</Link></li>
              <li><Link href="#services" className="hover:text-[var(--color-primary)] transition-colors">Balinese Massage</Link></li>
              <li><Link href="#services" className="hover:text-[var(--color-primary)] transition-colors">Aroma Massage</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col space-y-6">
            <h4 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-2">Contact Us</h4>
            <ul className="space-y-5 font-light text-lg text-gray-600">
              <li className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm border border-gray-100 shrink-0">
                  <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+918409122919" className="hover:text-[var(--color-primary)] transition-colors">+91 8409122919</a>
                  <a href="tel:+919263516115" className="hover:text-[var(--color-primary)] transition-colors">+91 9263516115</a>
                  <a href="tel:+919241651890" className="hover:text-[var(--color-primary)] transition-colors">+91 9241651890</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm border border-gray-100">
                  <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <a href="mailto:Oliviaspaphysiotherapy8409@gmail.com" className="hover:text-[var(--color-primary)] transition-colors break-all">Oliviaspaphysiotherapy8409@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright block */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 font-light tracking-wide">
          <p>Copyright © reserved Olivia Spa N Physiothreapy</p>
          <p>
            Made with ❤️ by <a href="https://www.linkedin.com/in/ranjan-kumar-a3a27425a/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:text-gray-900 transition-colors font-medium">Ranjan</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
