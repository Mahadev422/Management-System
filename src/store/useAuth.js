import { create } from "zustand";

const url = import.meta.env.VITE_BACKEND;

export const useLogin = create((set, get) => ({
  error: null,
  isLoading: false,

  handleLogin: async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      set({ isLoading: true });
      const res = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      console.log(resData);
      if (!resData.ok) {
        set({ error: resData.msg });
      } else {
        set({ error: null });
        e.target.reset();
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export const useAuth = create((set, get) => ({
  loading: false,
  user: null,
  error: null,

  checkLogin: async () => {
    try {
      set({ loading: true });
      const res = await fetch(`${url}/auth/me`, {
        credentials: "include",
      });
      const resData = await res.json();
      if (!resData.ok) {
        set({ error: resData.msg });
      } else set({ user: { ...resData.msg } });
    } catch (err) {
    } finally {
      set({ loading: false });
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
