import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Models from "@/components/sections/Models";
import Paths from "@/components/sections/Paths";
import HowItWorks from "@/components/sections/HowItWorks";
import Kit from "@/components/sections/Kit";
import Gallery from "@/components/sections/Gallery";
import CatalogSection from "@/components/sections/CatalogSection";
import Special from "@/components/sections/Special";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FloatingSidebar from "@/components/FloatingSidebar";

export const metadata: Metadata = {
  title: "מנצור אלומיניום | גדרות אלומיניום איכותיות ברעננה",
  description:
    "מנצור אלומיניום - 35 שנות ניסיון בייצור והתקנת גדרות אלומיניום. גדר קלאסית, כפרית, היי-טק ולייזר. ערכות DIY חתוכות למידה. אזור המרכז.",
  alternates: { canonical: "https://www.manzur.co.il" },
};

export default function HomePage() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <Models />
        <Paths />
        <HowItWorks />
        <Kit />
        <Gallery />
        <CatalogSection />
        <Special />
        <Contact />
        <About />
      </main>
      <Footer />
      <WhatsAppFloat />
      <FloatingSidebar />
    </div>
  );
}
