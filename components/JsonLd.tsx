export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Smart Advertising & Wrapping Dubai",
    alternateName: "Smart Wrapping",
    description:
      "Dubai's leading interior wrapping experts. Premium architectural resurfacing for kitchens, bathrooms, furniture and walls. 500+ textures, 24-hour transformations.",
    url: "https://smartwrapping.ae",
    telephone: "+971562023458",
    email: "info@smartwrapping.ae",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
      streetAddress: "Dubai Design District",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.1866,
      longitude: 55.2798,
    },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3rrnMkf52JN0jz8xjP-gs7P978CE_SbIrQ_PAJWLiKRDyr4g_2gXiuoq-C6U3ozZmDwQLoRet1gNuMjJsIz45Bm6BXiXb0VyHBDinSlHoGKL2k1otURJPFhYXicBPbEAYND9EySTedH0kIV_bWUoZ0O6g6UaD_vddmPrKfOjd0UTHLnxAy_-_blR-VulRcL0jaeKSdbBcnqZXTkObDpsOANNbW3jlMhoAyzM2gGMbJZKQKgkOIdDZhjQenxI-8-2_Aoy0nRaD0UA",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
    sameAs: ["https://instagram.com", "https://facebook.com"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sarah J." },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Completely changed the vibe of my Marina apartment. The kitchen looks like it cost 100k AED, but we only spent a fraction. The marble wrap is incredible.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Ahmed K." },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "The team was so professional. No dust at all. They finished my entire wardrobe and kitchen in one day. Highly recommended for anyone renting!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Michael R." },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Used them for our office reception. The wood finish looks so real people touch it to check. Professional and efficient.",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Interior Wrapping Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Wrapping",
            description:
              "Stone, Wood, & Ultra-Matte finishes for a designer kitchen at a fraction of the cost.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom & Dining Wrapping",
            description:
              "Moisture-resistant wraps for vanities, dining tables, and sideboards.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Furniture & Wall Wrapping",
            description:
              "Wardrobes, feature walls, and interior doors with seamless corner execution.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does interior wrapping take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Full transformations are typically achieved in 24-48 hours with minimal disruption to your lifestyle.",
        },
      },
      {
        "@type": "Question",
        name: "Is interior wrapping messy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. There is zero mess — no dust, no demolition, no noise. We work cleanly within your existing footprint.",
        },
      },
      {
        "@type": "Question",
        name: "How much can I save with wrapping vs replacement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Interior wrapping saves up to 70% compared to full replacement while achieving the same high-end architectural finishes.",
        },
      },
      {
        "@type": "Question",
        name: "What warranty comes with the wrapping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our medical-grade vinyls come with a 5-10 year warranty. They are heat, water, and scratch resistant.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
