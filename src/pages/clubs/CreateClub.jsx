import { useState } from "react";

const CreateClub = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white p-2">
      <form onSubmit={handleSubmit} className="p-4 max-w-xl rounded-xl space-y-2 bg-gray-100">
        <div>
          <label>Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-1 w-full"
            required
          />
        </div>

        <div>
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border p-1 w-full"
            required
          >
            <option value="">Select category</option>
            <option value="tech">Tech</option>
            <option value="education">Education</option>
            <option value="finance">Finance</option>
          </select>
        </div>

        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 w-full"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateClub;
