import { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
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
    form.append("message", formData.message);

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbx8j3-k_lcsAAzbABDS6NcIfdqeOOTOEhLjn-PPyJ-TmPiTBAtjalOBgHs3QReBudJ1mg/exec", {
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
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-[#e6f0bb] text-black py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact ADRS Solutions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help your business grow.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        {/* Company Information */}
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">About ADRS</h2>
            <p className="text-white mb-4">
              ADRS Solutions is a leading technology partner helping businesses transform through digital innovation. With offices in India and the US, we serve clients across multiple industries.
            </p>
            <p className="text-white">
              Our expertise includes enterprise software development, cloud solutions, and digital transformation services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="text-white mt-1 mr-4">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">ADRS Technosoft</h3>
                <p className="text-white">71, Dadda Nagar, Jabalpur</p>
                <p className="text-white">Madhya Pradesh 482002</p>
                <p className="text-white">India</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-white mt-1 mr-4">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-white">+91 9201347033</p>
                <p className="text-white">(Monday to Friday, 9am to 6pm IST)</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-white mt-1 mr-4">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-white">support@adrstechno.com</p>
                <p className="text-white">adrstechnosoft@gmail.com</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/adrs-technology/" className="text-white hover:text-blue-900"><FaLinkedin className="text-2xl" /></a>
                <a href="https://github.com/adrstechno" className="text-white hover:text-blue-900"><FaGithub className="text-2xl" /></a>
                <a href="https://www.instagram.com/adrstechno?igsh=MWhjOGdvdXpzOXBwYg==" className="text-white hover:text-blue-900"><FaFacebook className="text-2xl" /></a>
                <a href="https://www.instagram.com/adrstechno?igsh=MWhjOGdvdXpzOXBwYg==" className="text-white hover:text-blue-900"><FaInstagram className="text-2xl" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#e6f0bb] rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-black font-medium mb-2">Name *</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-black font-medium mb-2">Message *</label>
              <textarea
                name="message"
                rows="4"
                className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              {/* Response */}
            {responseMsg && (
              <div
                className={`p-3 rounded-lg text-center font-medium animate-fade-in ${isSuccess
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                  }`}
              >
                {responseMsg}
              </div> )}
            </div> 
            

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ${isSbmitting }"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>

            {status && <p className="text-center text-sm mt-3">{status}</p>}
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            title="ADRS Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117371.20041529769!2d79.92916776924727!3d23.181467777664804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x3981ae047235df95%3A0xc6821d882e8b1b91!2sAxis%20Bank!5e0!3m2!1sen!2sin!4v1698300432713!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
