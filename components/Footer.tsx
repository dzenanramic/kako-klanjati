import { Heart, Youtube, Facebook, Instagram, Music2 } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.youtube.com/@ElvedinPezic",
    label: "YouTube",
    icon: Youtube,
  },
  {
    href: "https://www.facebook.com/pezicelvedin?fref=ts#",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://www.instagram.com/pezic_elvedin",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.tiktok.com/@dr.elvedinpezic?_t=ZN-8ttVN4za4yE&_r=1",
    label: "TikTok",
    icon: Music2,
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 mt-16 bg-[var(--color-green-warm-800)] text-white">
      {/* Decorative top border */}
      <div className="h-[3px] bg-[var(--color-green-warm-400)] w-full" />

      <div className="max-w-4xl mx-auto text-center px-4 py-16">
        <div className="flex justify-center mb-6">
          <Heart className="text-[var(--color-green-warm-200)]" size={32} />
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-white/85">
          Pošaljite ovaj tekst svima onima za koje mislite da bi im mogao biti
          od koristi.
        </p>

        <div className="mt-10">
          <h3 className="text-base font-medium text-white/70 mb-5 tracking-wide uppercase">
            Pratite nas
          </h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-[var(--color-green-warm-200)] hover:bg-white/20 hover:text-white transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 w-20 h-[2px] bg-white/20 mx-auto rounded-full" />
      </div>
    </footer>
  );
}
