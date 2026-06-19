interface HeroProps {
  mounted: boolean;
}

export function Hero({ mounted }: HeroProps) {
  return (
    <section className="relative py-28 lg:py-40 px-4 overflow-hidden">
      {/* Decorative Islamic ornament — subtle 8-pointed star motif */}
      <div className="islamic-ornament" aria-hidden="true" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-8 text-[var(--color-green-warm-800)]">
            Kako klanjati
          </h1>

          <div className="w-16 h-[3px] bg-[var(--color-green-warm-400)] mx-auto rounded-full mb-8" />

          <p className="text-xl md:text-2xl text-[var(--color-green-warm-700)] leading-relaxed max-w-3xl mx-auto font-light opacity-80">
            Za one koji žele da nauče klanjati namaz! Sve na jednom mjestu:{" "}
            <span className="font-semibold text-[var(--color-green-warm-600)]">
              abdest, namazi, Fatiha, kratke sure.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
