import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Transformations from "@/components/Transformations";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import CompletedWorks from "@/components/CompletedWorks";
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
        <Transformations />
        <Services />
        <Gallery />
        <Process />
        <Reviews />
        <CompletedWorks />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
