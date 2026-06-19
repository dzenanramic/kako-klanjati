"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/Hero";
import { ContentSection } from "@/components/ContentSection";
import { Footer } from "@/components/Footer";
import { sections } from "@/data/sections";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen relative">
      {/* Subtle background texture */}
      <div className="page-backdrop" aria-hidden="true" />

      <div className="relative z-10">
        <Hero mounted={mounted} />

        {/* Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </div>
  );
}
