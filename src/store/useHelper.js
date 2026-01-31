import {
  FaBook,
  FaCamera,
  FaCode,
  FaFilm,
  FaFlask,
  FaFutbol,
  FaGamepad,
  FaMusic,
  FaPaintBrush,
  FaTree,
  FaUsers,
} from "react-icons/fa";
import { create } from "zustand";

export const useHelper = create(() => ({
  eventTypes: [
    "conference",
    "workshop",
    "concert",
    "sports",
    "networking",
    "art",
    "hackathon",
    "seminar",
    "webinar",
    "gaming",
  ],
  clubType: [
    "technology",
    "sports",
    "arts",
    "photography",
    "literature",
    "gaming",
    "film",
    "science",
    "development",
    "others",
  ],

  getCategoryIcon: (category) => {
    const icons = {
      technology: FaCode,
      sports: FaFutbol,
      arts: FaPaintBrush,
      science: FaFlask,
      music: FaMusic,
      photography: FaCamera,
      literature: FaBook,
      gaming: FaGamepad,
      film: FaFilm,
      environment: FaTree,
    };
    const icon = icons[category] || FaUsers;
    return icon;
  },
  formatDate: (iso) => {
    const date = new Date(iso);

    const formatted = date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    return formatted;
  },
  firstCapital: (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
}));
