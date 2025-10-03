import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 py-20 bg-gradient-to-r from-emerald-900 to-teal-900 text-white mt-12">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="flex justify-center mb-6">
          <Heart className="text-emerald-300 animate-pulse" size={36} />
        </div>
        <p className="text-lg md:text-xl leading-relaxed opacity-90">
          Pošaljite ovaj tekst svima onima za koje mislite da bi im mogao biti
          od koristi.
        </p>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">
            Pratite nas na društvenim mrežama:
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.youtube.com/@ElvedinPezic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-white transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://www.facebook.com/pezicelvedin?fref=ts#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/pezic_elvedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@dr.elvedinpezic?_t=ZN-8ttVN4za4yE&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-white transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
        <div className="mt-10 w-28 h-1 bg-emerald-400 mx-auto rounded-full"></div>
      </div>
    </footer>
  );
}
