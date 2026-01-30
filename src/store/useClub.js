import { create } from "zustand";

import { clubsList } from "../data/clubList";


const url = import.meta.env.VITE_BACKEND;

export const useClub = create((set, get) => ({
  clubData: {},
  loading: false,
  error: null,
  clubs: [],

  set,
  getAllClubs: async () => {
    try {
      const res = await fetch(`${url}/club/get-all`, {credentials: "include"});
      const resData = await res.json();
      if(!resData.ok) set({error: resData.msg});
      else set({clubs: [...resData.msg]});
    } catch (err) {
      console.log(err.message)
    } finally {
      return clubsList;
    } 
  }
}));

export const useClubById = create((set) => ({
  loading: false,
  error: null,
  clubData: {},
  clubDat: {},

  getClubById: async (clubId) => {
    set({loading: true});
    try {
      const res = await fetch(`${url}/club/${clubId}`,{credentials: "include"});
      const resData = await res.json();
      if(!resData.ok) set({error: resData.msg, loading: false});
      else set({clubData: resData.msg, error: null, loading: false});
    } catch (err) {
      set({error: err.message})
    } finally {
      set({loading: false});
    }
  }
}))

export const useCreateClub = create((set) => ({
  loading: false,
  error: null,

  handleCreateClub: async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData);
    const coordinator = { _id: "6278ac34a6ddb2d2bef792bd", name: "Mahadev" };
    const data = {...formValues, coordinator, members: [{ _id: "6278ac34a6ddb2d2bef792bd", name: "Mahadev" }]}

    try {
      set({loading: true})
      const res = await fetch(`${url}/club/create-club`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data)
      });
      const resData = await res.json();
      console.log(resData)
      if(!resData.ok) {
        set({error: resData.msg});
      }
      else {
        set({error: null});
        e.target.reset();
      } 
    } catch (err) {
      console.log(err.message);
      set({error: err.message});
    } finally {
      set({loading: false});
    }
  }
}))