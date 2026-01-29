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

}));
