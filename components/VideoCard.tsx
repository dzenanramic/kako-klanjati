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
  sectionColor: string;
}

export function VideoCard({ resource, sectionColor }: VideoCardProps) {
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
