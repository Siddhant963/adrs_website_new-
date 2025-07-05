import { useState } from "react";

const RegisterForm = () => {
  const domainOptions = [
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "UI/UX Design",
    "Digital Marketing",
    "Graphic Design",
    "Other"
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    domain: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.domain.trim()) {
      newErrors.domain = "Please select a domain";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setResponseMsg("");

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("domain", formData.domain);
    form.append("message", formData.message);

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbxENmoevV4BMx8i1noBLTUH_idQGLifu7di1hIammiHYUD1EUvt4IyWQMTPtx4RNlsu/exec", {
        method: "POST",
        body: form,
      });

      const result = await res.json();

      if (result.result === "success") {
        setIsSuccess(true);
        setResponseMsg("🎉 Your form has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          domain: "",
          message: ""
        });
      } else {
        setIsSuccess(false);
        setResponseMsg("❌ Error: " + (result.message || "Something went wrong"));
      }
    } catch (err) {
      setIsSuccess(false);
      setResponseMsg("❌ Failed: " + (err.message || "Network error"));
    } finally {
      setIsSubmitting(false);
    }

    setIsSuccess(false);
    setTimeout(() => setResponseMsg(''), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-green-100 to-white px-4">
      <div className="w-full max-w-md mb-16">
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20 w-full p-4 sm:p-6"
        >
          {/* Header */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-4 text-center">
            <h2 className="text-2xl font-bold text-white">Register Now</h2>
            <p className="text-blue-100 mt-1">Get started with our services</p>
          </div>

          {/* Form Body */}
          <div className="space-y-4 mt-4">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.name
                    ? "border-red-500 bg-red-50 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-300 focus:border-blue-300"
                  }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.email
                    ? "border-red-500 bg-red-50 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-300 focus:border-blue-300"
                  }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.phone
                    ? "border-red-500 bg-red-50 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-300 focus:border-blue-300"
                  }`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* Domain */}
            <div>
              <select
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all appearance-none ${errors.domain
                    ? "border-red-500 bg-red-50 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-300 focus:border-blue-300"
                  }`}
              >
                <option value="">Select Domain</option>
                {domainOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.domain && (
                <p className="mt-1 text-sm text-red-600">{errors.domain}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about you..."
                rows="4"
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.message
                    ? "border-red-500 bg-red-50 focus:ring-red-300"
                    : "border-gray-300 focus:ring-blue-300 focus:border-blue-300"
                  }`}
              />
            </div>

            {/* Response */}
            {responseMsg && (
              <div
                className={`p-3 rounded-lg text-center font-medium animate-fade-in ${isSuccess
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                  }`}
              >
                {responseMsg}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 bg-gradient-to-br from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 ${isSubmitting ? "opacity-80 cursor-not-allowed" : "hover:shadow-lg"
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Submit Request"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default RegisterForm;