interface HeroProps {
  mounted: boolean;
}

export function Hero({ mounted }: HeroProps) {
  return (
    <section className="relative py-24 lg:py-36 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="relative z-10">
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-extrabold mb-10 tracking-tight transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
  );
}
