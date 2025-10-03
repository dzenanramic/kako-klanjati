"use client";

import { useState, useEffect } from "react";
import { FloatingOrb } from "@/components/FloatingOrb";
import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { Footer } from "@/components/Footer";
import { sections } from "@/data/sections";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Animated Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingOrb delay={0} />
        <div className="absolute top-1/3 right-0 translate-x-32">
          <FloatingOrb delay={2} />
        </div>
        <div className="absolute bottom-1/4 left-0 -translate-x-32">
          <FloatingOrb delay={1} />
        </div>
      </div>

      <Hero mounted={mounted} />

      {/* Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4">
        {sections.map((section, sectionIndex) => (
          <ContentSection
            key={section.title}
            section={section}
            sectionIndex={sectionIndex}
            mounted={mounted}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}
