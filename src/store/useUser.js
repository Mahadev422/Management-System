import { create } from "zustand";

const url = import.meta.env.VITE_BACKEND;

export const useUser = create((set, get) => ({
  user: {},
  error: null,
  loading: false,
  userData: {},

  getUserData: async () => {
    set({loading: true});
    const res = await fetch(`${url}/auth/me`);
    const resData = await res.json();
    if(!resData.ok) {
      set({loading: false, error: resData.msg});
    }
    set({user: resData.msg, userData: {...resData.msg}});
    set({loading: false});
  }
}));