import { create } from "zustand";

import { clubsList } from "../data/clubList";
import { clubData } from "../data/clubData";

export const useClub = create((set, get) => ({
  clubData: {},
  clubAchievement: [],
  clubCoordinators: [],
  clubDetails: {},
  clubs: [],

  set,
  getAllClubs: () => {
    set({clubs: [...clubsList]});
    return clubsList;
  },
  getClubById: (id) => {
    const clubs = get().clubs;
    if(clubs.length != 0) {
      const data = clubs.filter(club => club.id === Number(id));
      set({clubData: {...clubData}})
      return clubData;
    }
    
    const data = clubsList.filter(club => club.id === Number(id));
    if(data.length == 0) {
      window.location.href = '/clubs'
    };
    set({clubData: {...clubData}});
    return clubData;
  }
}))