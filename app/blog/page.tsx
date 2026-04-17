import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/config/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export const metadata = {
  title: "Blog | Smart Wrapping Dubai",
  description: "Read the latest guides, cost estimates, and trends in interior wrapping and architectural resurfacing in Dubai.",
};

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-surface min-h-screen">
        <div className="site-container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter mb-6 text-on-surface">
              Wrap Insights
            </h1>
            <p className="text-xl text-on-surface-variant font-body max-w-2xl mx-auto">
              Cost guides, trends, and inspiration for your next architectural resurfacing project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animate-delay-200">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-surface-dim"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-surface text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-on-surface-variant text-xs mb-3 font-semibold uppercase tracking-widest">
                    {post.date}
                  </span>
                  <h2 className="text-xl font-headline font-bold text-on-surface mb-4 group-hover:text-secondary transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-on-surface-variant text-sm flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 font-headline text-sm font-bold text-secondary flex items-center gap-2">
                    Read Article 
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>
                      arrow_forward
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
