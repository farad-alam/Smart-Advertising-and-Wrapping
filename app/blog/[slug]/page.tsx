import { notFound } from "next/navigation";
import Image from "next/image";
import { getBlogPostBySlug, blogPosts } from "@/config/blog";
import { siteConfig } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);
  if (!post) return { title: "Not Found" };

  return {
    title: `${post.title} | ${siteConfig.shortName}`,
    description: post.excerpt,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-surface min-h-screen">
        <article className="site-container max-w-4xl">
          {/* Article Header */}
          <header className="mb-12 text-center animate-fade-in-up">
            <div className="mb-6 flex justify-center items-center gap-4 text-sm font-bold uppercase tracking-widest text-on-surface-variant">
              <span className="text-secondary">{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tighter text-on-surface leading-tight mb-8">
              {post.title}
            </h1>
          </header>

          {/* Cover Image */}
          <div className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-16 animate-fade-in-up animate-delay-200 shadow-xl border border-surface-dim">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          {/* Content Body */}
          <div 
            className="prose prose-lg md:prose-xl prose-headings:font-headline prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-tertiary prose-img:rounded-2xl mx-auto text-on-surface prose-strong:text-on-surface prose-p:leading-relaxed animate-fade-in-up animate-delay-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article Footer / CTA */}
          <div className="mt-20 pt-10 border-t border-surface-dim text-center animate-fade-in-up animate-delay-400">
            <p className="text-xl font-headline font-bold mb-6">
              Ready to transform your space?
            </p>
            <a
              href={`${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`I just read your article "${post.title}" and would like to get a quote!`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-lg font-headline font-bold hover:bg-[#128C7E] transition-colors shadow-lg"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                chat
              </span>
              Chat on WhatsApp
            </a>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
