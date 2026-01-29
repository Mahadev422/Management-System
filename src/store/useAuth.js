import { create } from "zustand";

const url = import.meta.env.VITE_BACKEND;

export const useLogin = create((set, get) => ({
  error: null,
  isLoading: false,
  user: null,

  handleLogin: async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      set({isLoading: true})
      const res = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (!resData.ok) {
        set({ error: resData.msg });
      } else {
        set({ error: null, user: resData.msg });
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      set({isLoading: false});
    }
  },
}));

export const useForgot = create((set) => ({
  loading: false,
  error: null,

  handleForgot: async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = Object.fromEntries(formData);
    console.log(email);
  },
}));
