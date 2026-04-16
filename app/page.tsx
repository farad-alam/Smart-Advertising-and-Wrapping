import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <Services />
        <Gallery />
        <Process />
        <Reviews />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
