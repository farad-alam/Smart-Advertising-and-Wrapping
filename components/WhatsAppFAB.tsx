"use client";

import { siteConfig } from "../config/site";

export default function WhatsAppFAB() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-2 group">
      {/* Tooltip */}
      <div className="bg-surface-container-lowest px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2">
        <p className="text-xs font-bold text-tertiary whitespace-nowrap">
          Online Now
        </p>
      </div>

      {/* FAB */}
      <a
        href={`${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi! I'm browsing the website and need some quick assistance.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-[0_20px_40px_rgba(45,52,53,0.06)] backdrop-blur-xl border border-tertiary/10 hover:scale-110 transition-transform duration-300"
        aria-label="Chat with us on WhatsApp"
      >
        <span
          className="material-symbols-outlined text-tertiary text-4xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          chat
        </span>
      </a>
    </div>
  );
}
