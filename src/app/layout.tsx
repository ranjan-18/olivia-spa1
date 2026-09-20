import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Olivia Spa & Physiotherapy | Best Spa in Dhanbad",
    template: "%s | Olivia Spa Dhanbad",
  },
  description: "Experience premium spa and physiotherapy services at Olivia Spa in Dhanbad, Jharkhand, India. Relax, rejuvenate, and recover with our expert certified therapists.",
  keywords: ["Best Spa in Dhanbad", "Physiotherapy Dhanbad", "Olivia Spa", "Massage Therapy Dhanbad", "Wellness Center Jharkhand", "Thai Massage", "Swedish Massage"],
  authors: [{ name: "Olivia Spa" }],
  creator: "Olivia Spa",
  publisher: "Olivia Spa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Olivia Spa & Physiotherapy | Best Spa in Dhanbad",
    description: "Premium spa, massage, and physiotherapy services in Dhanbad. Rejuvenate your mind and body.",
    url: "https://oliviaspa.in",
    siteName: "Olivia Spa Dhanbad",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivia Spa & Physiotherapy | Dhanbad",
    description: "Premium spa and physiotherapy services in Dhanbad, Jharkhand.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
      </body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "name": "Olivia Spa & Physiotherapy",
            "image": "https://oliviaspa.in/logo.png",
            "@id": "https://oliviaspa.in",
            "url": "https://oliviaspa.in",
            "telephone": "+918409122919",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Memco More, Bhiphore Hirak Rd, Chanchani Colony",
              "addressLocality": "Dhanbad",
              "addressRegion": "Jharkhand",
              "postalCode": "826010",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 23.820846,
              "longitude": 86.430489
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "09:00",
              "closes": "21:00"
            },
            "priceRange": "$$"
          })
        }}
      />
    </html>
  );
}
