interface FloatingOrbProps {
  delay: number;
}

export function FloatingOrb({ delay }: FloatingOrbProps) {
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
