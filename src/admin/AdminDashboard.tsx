import { useState } from "react";
import DashboardLayout from "@/components/admin/DashboardLayout";

const AdminDashboard = () => {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    category: "",
    desc: "",
    tech: "",
    color: "",
    liveLink: "",
    githubLink: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    if (imageFile) {
      formDataToSend.append("image", imageFile);
    }
    formDataToSend.append("title", formData.title);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("desc", formData.desc);
    formDataToSend.append(
      "tech",
      JSON.stringify(formData.tech.split(",").map((t) => t.trim()))
    );
    formDataToSend.append("color", formData.color);
    formDataToSend.append("liveLink", formData.liveLink);
    formDataToSend.append("githubLink", formData.githubLink);

    await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      body: formDataToSend,
    });
    alert("Project Added Successfully!");
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-2">
              Add New Project
            </h1>
            <p className="text-slate-600">Create a beautiful portfolio piece</p>
          </div>

          {/* Main Form Card */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8 relative overflow-hidden">
            {/* Glossy overlay effect */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Upload Section */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-6 border border-slate-200/50">
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Project Image
                </label>
                <div className="flex items-center gap-4">
                  {imagePreview && (
                    <div className="w-24 h-24 rounded-xl overflow-hidden shadow-lg ring-2 ring-blue-500/20">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <label className="flex-1 cursor-pointer">
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300">
                      <svg
                        className="mx-auto h-12 w-12 text-slate-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="mt-2 text-sm text-slate-600">
                        Click to upload image
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Grid Layout for Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Project Title
                  </label>
                  <input
                    name="title"
                    placeholder="Enter project title"
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300   text-black shadow-sm hover:shadow-md"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Category
                  </label>
                  <input
                    name="category"
                    placeholder="e.g., Web Development"
                    onChange={handleChange}
                    className="w-full px-4 py-3   text-black bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  />
                </div>

                {/* Color */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Theme Color
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      name="color"
                      onChange={handleChange}
                      className="h-12 w-16   text-black rounded-lg border border-slate-200 cursor-pointer shadow-sm"
                    />
                    <input
                      name="color"
                      placeholder="#000000"
                      onChange={handleChange}
                      value={formData.color}
                      className="flex-1 px-4 py-3   text-black bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="desc"
                    placeholder="Describe your project..."
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3   text-black bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md resize-none"
                  />
                </div>

                {/* Technologies */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Technologies
                  </label>
                  <input
                    name="tech"
                    placeholder="React, Node.js, MongoDB, Tailwind CSS"
                    onChange={handleChange}
                    className="w-full px-4 py-3   text-black bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    Separate technologies with commas
                  </p>
                </div>

                {/* Live Link */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Live Project URL
                  </label>
                  <input
                    name="liveLink"
                    placeholder="https://example.com"
                    onChange={handleChange}
                    className="w-full px-4 py-3   text-black bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  />
                </div>

                {/* GitHub Link */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    GitHub Repository
                  </label>
                  <input
                    name="githubLink"
                    placeholder="https://github.com/username/repo"
                    onChange={handleChange}
                    className="w-full px-4   text-black py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white font-semibold px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Add Project
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;