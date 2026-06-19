import { BookOpen, Heart, Moon, Sun, LucideIcon } from "lucide-react";

export interface VideoResource {
  title: string;
  description?: string;
  youtubeUrl: string;
  icon?: string;
}

export interface Section {
  title: string;
  resources: VideoResource[];
  icon: LucideIcon;
  color: string;
}

export const sections: Section[] = [
  {
    title: "Teorija",
    icon: BookOpen,
    color: "from-green-warm-500 to-green-warm-600",
    resources: [
      {
        title: "Kako se uzima abdest",
        description: "Teorijski prikaz uzimanja abdesta",
        youtubeUrl: "https://www.youtube.com/watch?v=8z3TdBYr2jg",
        icon: "💧",
      },
      {
        title: "Kako se kanja namaz",
        description: "Teorijski prikaz klanjanja namaza",
        youtubeUrl: "https://www.youtube.com/watch?v=eWa7x_3z_jM",
        icon: "🤲",
      },
    ],
  },
  {
    title: "Praktično",
    icon: Heart,
    color: "from-green-warm-400 to-green-warm-500",
    resources: [
      {
        title: "Kako uzeti abdest",
        description: "Korak po korak objašnjenje abdesta",
        youtubeUrl: "https://www.youtube.com/watch?v=1eBuWSVr9p0",
        icon: "✋",
      },
    ],
  },
  {
    title: "Namazi",
    icon: Moon,
    color: "from-green-warm-600 to-green-warm-700",
    resources: [
      {
        title: "Kako se klanja sabah namaz",
        youtubeUrl: "https://www.youtube.com/watch?v=uUeDyP5DStA",
        icon: "🌅",
      },
      {
        title: "Kako se klanja podne namaz",
        youtubeUrl: "https://www.youtube.com/watch?v=MV6Q-E-FWV8",
        icon: "☀️",
      },
      {
        title: "Kako se klanja ikindija namaz",
        youtubeUrl: "https://www.youtube.com/watch?v=oO1Wq2ox70I",
        icon: "🌤️",
      },
      {
        title: "Kako se klanja akšam namaz",
        youtubeUrl: "https://www.youtube.com/watch?v=cUS0ryGx_3U",
        icon: "🌆",
      },
      {
        title: "Kako se klanja jacija namaz",
        youtubeUrl: "https://www.youtube.com/watch?v=SpFsSuG9_kI",
        icon: "🌙",
      },
    ],
  },
  {
    title: "Kratke Sure",
    icon: Sun,
    color: "from-gold-400 to-gold-500",
    resources: [
      {
        title: "Sura El-Fatiha",
        youtubeUrl: "https://www.youtube.com/watch?v=fKvPEcvo2uE",
        icon: "📖",
      },
      {
        title: "Sura El-Ihlas",
        youtubeUrl: "https://www.youtube.com/watch?v=LNBzyWA1Qv4",
        icon: "✨",
      },
      {
        title: "Sura En-Nass",
        youtubeUrl: "https://www.youtube.com/watch?v=6NliD23gPlU",
        icon: "🛡️",
      },
      {
        title: "Sura El-Feleq",
        youtubeUrl: "https://www.youtube.com/watch?v=qzGovuaClos",
        icon: "🌟",
      },
    ],
  },
];
