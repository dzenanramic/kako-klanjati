"use client";

import { PlayCircle, Moon, Sun, BookOpen, Heart } from "lucide-react";
import { useState, useEffect } from "react";

interface VideoResource {
  title: string;
  description?: string;
  youtubeUrl: string;
  icon?: string;
}

interface Section {
  title: string;
  resources: VideoResource[];
  icon: React.ElementType;
  color: string;
}

const sections: Section[] = [
  {
    title: "Teorija",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-600",
    resources: [
      {
        title: "Kako se kanja namaz",
        description: "Teorijski prikaz klanjanja namaza",
        youtubeUrl: "https://www.youtube.com/watch?v=eWa7x_3z_jM",
        icon: "🤲",
      },
      {
        title: "Kako se uzima abdest",
        description: "Teorijski prikaz uzimanja abdesta",
        youtubeUrl: "https://www.youtube.com/watch?v=8z3TdBYr2jg",
        icon: "💧",
      },
    ],
  },
  {
    title: "Praktično",
    icon: Heart,
    color: "from-blue-500 to-indigo-600",
    resources: [
      {
        title: "Kako uzeti abdest",
        description: "Korak po korak objašnjenje abdesta",
        youtubeUrl: "https://www.youtube.com/watch?v=1eBuWSVr9p0",
        icon: "✋",
      },
    ],
  },
  {
    title: "Namazi",
    icon: Moon,
    color: "from-purple-500 to-violet-600",
    resources: [
      {
        title: "Kako se klanja sabah namaz",
        youtubeUrl: "https://www.youtube.com/watch?v=uUeDyP5DStA",
        icon: "🌅",
      },
      {
        title: "Kako se klanja podne namaz",
        youtubeUrl: "https://www.youtube.com/watch?v=MV6Q-E-FWV8",
        icon: "☀️",
      },
      {
        title: "Kako se klanja ikindija namaz",
        youtubeUrl: "https://www.youtube.com/watch?v=oO1Wq2ox70I",
        icon: "🌤️",
      },
      {
        title: "Kako se klanja akšam namaz",
        youtubeUrl: "https://www.youtube.com/watch?v=cUS0ryGx_3U",
        icon: "🌆",
      },
      {
        title: "Kako se klanja jacija namaz",
        youtubeUrl: "https://www.youtube.com/watch?v=SpFsSuG9_kI",
        icon: "🌙",
      },
    ],
  },
  {
    title: "Kratke Sure",
    icon: Sun,
    color: "from-amber-500 to-orange-600",
    resources: [
      {
        title: "Sura El-Fatiha",
        youtubeUrl: "https://www.youtube.com/watch?v=fKvPEcvo2uE",
        icon: "📖",
      },
      {
        title: "Sura El-Ihlas",
        youtubeUrl: "https://www.youtube.com/watch?v=LNBzyWA1Qv4",
        icon: "✨",
      },
      {
        title: "Sura En-Nass",
        youtubeUrl: "https://www.youtube.com/watch?v=6NliD23gPlU",
        icon: "🛡️",
      },
      {
        title: "Sura El-Feleq",
        youtubeUrl: "https://www.youtube.com/watch?v=qzGovuaClos",
        icon: "🌟",
      },
    ],
  },
];

function VideoCard({
  resource,
  sectionColor,
}: {
  resource: VideoResource;
  sectionColor: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/70 shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
        isHovered ? "scale-[1.04]" : "scale-100"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${sectionColor} opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
      ></div>

      <div className="relative p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="text-3xl">{resource.icon}</div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
              {resource.title}
            </h3>
            {resource.description && (
              <p className="text-gray-700 text-sm mt-2 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {resource.description}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href={resource.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${sectionColor} text-white font-semibold shadow-lg hover:shadow-emerald-500/40 transition-all duration-500 transform hover:scale-110 no-underline`}
          >
            <PlayCircle size={22} className="animate-pulse" />
            <span>Gledaj video</span>
          </a>
        </div>
      </div>

      {/* Glow border */}
      <div
        className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${sectionColor} opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none`}
      ></div>
    </div>
  );
}

function SectionHeader({ section }: { section: Section }) {
  const IconComponent = section.icon;
  return (
    <div className="text-center mb-16">
      <div
        className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${section.color} shadow-lg mb-6`}
      >
        <IconComponent className="text-white" size={36} />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
        {section.title}
      </h2>
      <div
        className={`w-28 h-1 bg-gradient-to-r ${section.color} mx-auto rounded-full`}
      ></div>
    </div>
  );
}

function FloatingOrb({ delay }: { delay: number }) {
  return (
    <div
      className="absolute w-72 h-72 bg-gradient-to-r from-emerald-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: "5s",
      }}
    ></div>
  );
}

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

      {/* Hero */}
      <section className="relative py-24 lg:py-36 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative z-10">
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-extrabold mb-10 tracking-tight transition-all duration-1000 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-800 bg-clip-text text-transparent">
                Kako klanjati
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-light">
              Za one koji žele da nauče klanjati namaz! Sve na jednom mjestu:{" "}
              <span className="font-semibold text-emerald-700">
                abdest, namazi, Fatiha, kratke sure.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4">
        {sections.map((section, sectionIndex) => (
          <section key={section.title} className="mb-28">
            <SectionHeader section={section} />
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transform transition-all duration-700 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${sectionIndex * 200}ms` }}
            >
              {section.resources.map((resource, resourceIndex) => (
                <div
                  key={`${sectionIndex}-${resourceIndex}`}
                  className="transform transition-all duration-700"
                  style={{
                    transitionDelay: `${
                      sectionIndex * 200 + resourceIndex * 120
                    }ms`,
                  }}
                >
                  <VideoCard resource={resource} sectionColor={section.color} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-20 bg-gradient-to-r from-emerald-900 to-teal-900 text-white mt-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <Heart className="text-emerald-300 animate-pulse" size={36} />
          </div>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            Pošaljite ovaj tekst svima onima za koje mislite da bi im mogao biti
            od koristi.
          </p>
          <div className="mt-10 w-28 h-1 bg-emerald-400 mx-auto rounded-full"></div>
        </div>
      </footer>
    </div>
  );
}
