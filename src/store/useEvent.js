import { create } from "zustand";

const url = import.meta.env.VITE_BACKEND;

export const useEvent = create((set, get) => ({


  handleCreateEvent: async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch(`${url}/event/create-event`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
      const resData = await res.json()
      if(!resData.ok) {
        console.log(resData.msg);
        return;
      }
      e.target.reset();
      console.log('Event is sent for review to admin.', resData.msg)
    } catch (err) {

    }
  }
}))