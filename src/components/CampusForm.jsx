import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const CampusForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profile: "",
    course: "",
    branch: "",
    college: "",
    passoutYear: "",
    resumeLink: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = "Valid email is required";
    if (!formData.phone.match(/^\d{10}$/))
      newErrors.phone = "Phone must be 10 digits";
    if (!formData.profile) newErrors.profile = "Profile is required";
    if (!formData.course) newErrors.course = "Course is required";
    if (!formData.branch.trim()) newErrors.branch = "Branch is required";
    if (!formData.college.trim()) newErrors.college = "College is required";
    if (
      !formData.passoutYear ||
      formData.passoutYear < 2020 ||
      formData.passoutYear > 2030
    )
      newErrors.passoutYear = "Enter valid passout year (2020-2030)";
    if (
      !formData.resumeLink.match(
        /^(https?:\/\/)?(www\.)?drive\.google\.com\/.*$/
      )
    )
      newErrors.resumeLink = "Valid Google Drive resume link required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwlXZ4dhDvjfGq9ZS8ASgab8NvbEqRFSvJXDOw7sG-kFCVzZcz86Aw1RoWo1WH9TYg/exec"; 

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          profile: "",
          course: "",
          branch: "",
          college: "",
          passoutYear: "",
          resumeLink: "",
          experience: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error connecting to Google Sheet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-300 p-4">
      <div className="backdrop-blur-md bg-white/80 rounded-3xl shadow-2xl w-full max-w-xl p-8 border border-white/40 transition-all duration-500 hover:shadow-blue-200">
        <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Campus Placement Form
        </h2>

        {isSubmitted ? (
          <div className="text-center text-green-600 animate-fadeIn flex flex-col items-center justify-center space-y-3">
            <CheckCircle2 size={40} />
            <p className="text-lg font-medium">
              ✅ Your response has been submitted successfully!!
            </p>
            <p className="text-sm text-gray-600">
              We’ll get back to you soon. Thank you!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            name="campus-form"
            className="space-y-5 animate-fadeIn"
          >
            {/* Name */}
            <InputField
              label="Full Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Enter your full name"
            />

            {/* Email */}
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="you@example.com"
            />

            {/* Phone */}
            <InputField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="Enter 10-digit phone number"
            />

            {/* Profile Dropdown */}
       <SelectField
  label="Profile Applying For"
  name="profile"
  value={formData.profile}
  onChange={handleChange}
  error={errors.profile}
  options={[
    "BPO Executive", 
    "Project Associate", 
    "Python Developer", 
    "Full Stack Developer",
    "UI/UX Designer",
    "Azure Data Engineer",
    "AWS Engineer",
    "HR Project Coordinator",
  ]}
/>


            {/* Course Dropdown */}
            <SelectField
              label="Course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              error={errors.course}
              options={[
                "B.Tech",
                "M.Tech",
                "MCA",
                "MBA",
              ]}
            />

            {/* Branch */}
            <SelectField
              label="Branch"
              name="branch"
              type="text"
              value={formData.branch}
              onChange={handleChange}
              error={errors.branch}
               options={[
                "CSE",
                "EC",
                "IT",
                '-'
              ]}

            />

            {/* College */}
            <InputField
              label="College Name"
              name="college"
              type="text"
              value={formData.college}
              onChange={handleChange}
              error={errors.college}
              placeholder="Enter your college name"
            />

            {/* Passout Year */}
            <InputField
              label="Passout Year"
              name="passoutYear"
              type="number"
              value={formData.passoutYear}
              onChange={handleChange}
              error={errors.passoutYear}
              placeholder="e.g. 2025"
            />
            {/* Previous Experience */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Previous Experience
  </label>
  <textarea
    name="experience"
    value={formData.experience || ""}
    onChange={handleChange}
    required
    placeholder="Describe your previous work/internship experience"
    className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
      errors.experience ? "border-red-500" : "border-gray-300"
    }`}
    rows={4}
  ></textarea>
  {errors.experience && (
    <p className="text-red-500 text-xs mt-1">{errors.experience}</p>
  )}
</div>

            {/* Resume Link */}
            <InputField
              label="Resume Link (Google Drive)"
              name="resumeLink"
              type="url"
              value={formData.resumeLink}
              onChange={handleChange}
              error={errors.resumeLink}
              placeholder="Paste your Google Drive resume link and access is set to 'Anyone with the link'"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded-lg text-white font-medium transition-all duration-300 shadow-lg ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// Reusable Input Field Component
const InputField = ({ label, name, type, value, onChange, placeholder, error }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

// Reusable Select Field Component
const SelectField = ({ label, name, value, onChange, options, error }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required
      className={`w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none bg-white ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    >
      <option value="">Select {label}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default CampusForm;
