import { LucideIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { VideoCard } from "./VideoCard";

interface VideoResource {
  title: string;
  description?: string;
  youtubeUrl: string;
  icon?: string;
}

interface Section {
  title: string;
  resources: VideoResource[];
  icon: LucideIcon;
  color: string;
}

interface ContentSectionProps {
  section: Section;
  sectionIndex: number;
  mounted: boolean;
}

export function ContentSection({
  section,
  sectionIndex,
  mounted,
}: ContentSectionProps) {
  return (
    <section className="mb-28">
      <SectionHeader
        title={section.title}
        icon={section.icon}
        color={section.color}
      />
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transform transition-all duration-700 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: `${sectionIndex * 200}ms` }}
      >
        {section.resources.map((resource, resourceIndex) => (
          <div
            key={`${sectionIndex}-${resourceIndex}`}
            className="transform transition-all duration-700"
            style={{
              transitionDelay: `${sectionIndex * 200 + resourceIndex * 120}ms`,
            }}
          >
            <VideoCard resource={resource} sectionColor={section.color} />
          </div>
        ))}
      </div>
    </section>
  );
}
