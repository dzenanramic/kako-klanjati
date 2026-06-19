import { PlayCircle } from "lucide-react";
import { useState } from "react";

interface VideoResource {
  title: string;
  description?: string;
  youtubeUrl: string;
  icon?: string;
}

interface VideoCardProps {
  resource: VideoResource;
}

export function VideoCard({ resource }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative rounded-2xl bg-white/80 shadow-md hover:shadow-xl transition-all duration-500 ${
        isHovered ? "-translate-y-1" : "translate-y-0"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left accent border */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 bg-[var(--color-green-warm-400)] rounded-l-2xl transition-all duration-500 ${
          isHovered ? "w-1.5" : "w-1"
        }`}
      />

      <div className="relative p-6 pl-7">
        <div className="flex items-start gap-3 mb-5">
          <div className="text-2xl flex-shrink-0">{resource.icon}</div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-[var(--color-green-warm-800)] leading-snug">
              {resource.title}
            </h3>
            {resource.description && (
              <p className="text-sm text-[var(--color-green-warm-600)] mt-1.5 leading-relaxed opacity-75">
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
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[var(--color-green-warm-500)] text-white font-medium text-sm shadow-sm hover:bg-[var(--color-green-warm-600)] transition-all duration-300 hover:shadow-md no-underline"
          >
            <PlayCircle size={20} />
            <span>Gledaj video</span>
          </a>
        </div>
      </div>
    </div>
  );
}
