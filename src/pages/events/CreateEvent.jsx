import { useState } from "react";

const initialState = {
  title: "",
  tagline: "",
  type: "Conference",
  status: "upcoming",
  date: "",
  time: "",
  duration: "",
  venue: {
    name: "",
    address: "",
    building: "",
    room: "",
    capacity: "",
  },
  coverImage: "",
  images: [""],
  description: "",
  detailedDescription: "",
  highlights: [""],
  registration: {
    deadline: "",
    fee: 0,
    isFree: false,
    capacity: "",
  },
};

export default function EventForm() {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleNestedChange = (section, field, value) => {
    setForm({
      ...form,
      [section]: { ...form[section], [field]: value },
    });
  };

  const handleArrayChange = (field, index, value) => {
    const updated = [...form[field]];
    updated[index] = value;
    setForm({ ...form, [field]: updated });
  };

  const addArrayItem = (field) => {
    setForm({ ...form, [field]: [...form[field], ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const input =
    "w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500";

  const label = "text-sm font-medium text-gray-700";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-4xl space-y-8 rounded-2xl bg-white p-8 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-800">Create Event</h2>

      {/* BASIC INFO */}
      <section className="space-y-4">
        <label className={label}>Event Title</label>
        <input
          className={input}
          name="title"
          required
          value={form.title}
          onChange={handleChange}
        />

        <label className={label}>Tagline</label>
        <input
          className={input}
          name="tagline"
          value={form.tagline}
          onChange={handleChange}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className={label}>Type</label>
            <select
              className={input}
              name="type"
              value={form.type}
              onChange={handleChange}
            >
              <option>Conference</option>
              <option>Workshop</option>
              <option>Hackathon</option>
              <option>Seminar</option>
              <option>Meetup</option>
            </select>
          </div>

          <div>
            <label className={label}>Date</label>
            <input
              type="date"
              className={input}
              name="date"
              required
              value={form.date}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            className={input}
            placeholder="Time (9:00 AM - 6:00 PM)"
            name="time"
            value={form.time}
            onChange={handleChange}
          />
          <input
            className={input}
            placeholder="Duration"
            name="duration"
            value={form.duration}
            onChange={handleChange}
          />
        </div>
      </section>

      {/* VENUE */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Venue</h3>

        <input
          className={input}
          placeholder="Venue Name"
          value={form.venue.name}
          onChange={(e) => handleNestedChange("venue", "name", e.target.value)}
        />

        <input
          className={input}
          placeholder="Address"
          value={form.venue.address}
          onChange={(e) =>
            handleNestedChange("venue", "address", e.target.value)
          }
        />

        <input
          className={input}
          type="number"
          placeholder="Capacity"
          value={form.venue.capacity}
          onChange={(e) =>
            handleNestedChange("venue", "capacity", e.target.value)
          }
        />
      </section>

      {/* DESCRIPTION */}
      <section className="space-y-4">
        <textarea
          className={`${input} min-h-25`}
          placeholder="Short description"
          required
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <textarea
          className={`${input} min-h-35`}
          placeholder="Detailed description"
          value={form.detailedDescription}
          onChange={(e) =>
            setForm({ ...form, detailedDescription: e.target.value })
          }
        />
      </section>

      {/* HIGHLIGHTS */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Highlights</h3>

        {form.highlights.map((h, i) => (
          <input
            key={i}
            className={input}
            placeholder={`Highlight ${i + 1}`}
            value={h}
            onChange={(e) => handleArrayChange("highlights", i, e.target.value)}
          />
        ))}

        <button
          type="button"
          onClick={() => addArrayItem("highlights")}
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          + Add Highlight
        </button>
      </section>

      {/* REGISTRATION */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Registration</h3>

        <input
          type="date"
          className={input}
          value={form.registration.deadline}
          onChange={(e) =>
            handleNestedChange("registration", "deadline", e.target.value)
          }
        />

        <input
          type="number"
          className={input}
          placeholder="Fee"
          value={form.registration.fee}
          onChange={(e) =>
            handleNestedChange("registration", "fee", e.target.value)
          }
        />

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.registration.isFree}
            onChange={(e) =>
              handleNestedChange("registration", "isFree", e.target.checked)
            }
          />
          Free Event
        </label>
      </section>

      {/* SUBMIT */}
      <button
        type="submit"
        className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700"
      >
        Create Event
      </button>
    </form>
  );
}
