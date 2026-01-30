import { FaBook, FaCamera, FaCode, FaFilm, FaFlask, FaFutbol, FaGamepad, FaMusic, FaPaintBrush, FaTree, FaUsers } from "react-icons/fa";
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
        Technology: FaCode,
        Sports: FaFutbol,
        Arts: FaPaintBrush,
        Science: FaFlask,
        Music: FaMusic,
        Photography: FaCamera,
        Literature: FaBook,
        Gaming: FaGamepad,
        Film: FaFilm,
        Environment: FaTree,
      };
      const icon = icons[category] || FaUsers;
      return icon;
    },

}));
