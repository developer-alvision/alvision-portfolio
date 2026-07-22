import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Top Header Navigation */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* Portfolio Showcase Section (Our Work) - Immediately below the Navbar header */}
        <Portfolio />

        {/* Hero Section */}
        <Hero />

        {/* Statistics Band */}
        <StatsBand />

        {/* Services Grid with tabs */}
        <Services />

        {/* Corporate Mission statement */}
        <Mission />

        {/* Contact Form and copy details */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </>
  );
}
