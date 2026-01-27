import { create } from "zustand";

import { clubsList } from "../data/clubList";
import { clubData } from "../data/clubData";

const url = import.meta.env.VITE_BACKEND;

export const useClub = create((set, get) => ({
  clubData: {},
  clubAchievement: [],
  clubCoordinators: [],
  clubDetails: {},
  clubs: [],

  set,
  getAllClubs: async () => {
    set({ clubs: [...clubsList] });
    console.log(JSON.stringify(clubData))

    try {
      const res = await fetch(`${url}/club/get-all`);
      const resData = await res.json();
      if(!resData.ok) console.log(resData.msg)
      console.log(resData.msg);
    } catch (err) {
      console.log(err.message)
    } finally {
      return clubsList;
    }
    
    
  },
  getClubById: (id) => {
    const clubs = get().clubs;
    if (clubs.length != 0) {
      const data = clubs.filter((club) => club.id === Number(id));
      set({ clubData: { ...clubData } });
      return clubData;
    }

    const data = clubsList.filter((club) => club.id === Number(id));
    if (data.length == 0) {
      window.location.href = "/clubs";
    }
    set({ clubData: { ...clubData } });
    return clubData;
  },
  handleCreateClub: async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData);
    const coordinator = { _id: "6278ac34a6ddb2d2bef792bd", name: "Mahadev" };
    const data = {...formValues, coordinator, members: [{ _id: "6278ac34a6ddb2d2bef792bd", name: "Mahadev" }]}

    try {
      const res = await fetch(`${url}/club/create-club`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
      const resData = await res.json();
      console.log(resData);
      set({clubs: [...clubs, resData]});
      e.target.reset();
    } catch (err) {
      console.log(err.message);
    }
  }
}));
