import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  icon: LucideIcon;
  color: string;
}

export function SectionHeader({
  title,
  icon: IconComponent,
  color,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <div
        className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${color} shadow-lg mb-6`}
      >
        <IconComponent className="text-white" size={36} />
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
        {title}
      </h2>
      <div
        className={`w-28 h-1 bg-gradient-to-r ${color} mx-auto rounded-full`}
      ></div>
    </div>
  );
}
