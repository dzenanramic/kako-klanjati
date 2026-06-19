import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  icon: LucideIcon;
}

export function SectionHeader({
  title,
  icon: IconComponent,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-14">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-green-warm-500)] shadow-sm mb-5">
        <IconComponent className="text-white" size={28} />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-green-warm-800)] mb-3">
        {title}
      </h2>
      <div className="w-20 h-[3px] bg-[var(--color-green-warm-400)] mx-auto rounded-full" />
    </div>
  );
}
