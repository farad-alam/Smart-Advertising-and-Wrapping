import Image from "next/image";
import { siteConfig } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function CompletedWorkPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-surface min-h-screen">
        <div className="site-container">
          {/* Page Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter mb-6 text-on-surface">
              Completed Work
            </h1>
            <p className="text-xl text-on-surface-variant font-body max-w-2xl mx-auto">
              A showcase of our successfully delivered projects. See the dramatic
              difference our premium wraps make across various categories.
            </p>
          </div>

          {/* All Works Grid */}
          <div className="animate-fade-in-up animate-delay-200">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {siteConfig.completedWorks.map((work, i) => (
                <div
                  key={work.image + i}
                  className="break-inside-avoid relative overflow-hidden rounded-2xl group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="inline-block px-3 py-1 bg-secondary text-surface text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                      {work.category}
                    </span>
                    <h3 className="text-white font-headline text-xl font-bold">
                      {work.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
