import { Link } from 'react-router-dom';

const roles = [
  {
    title: "React.js Developer",
    description: "Work on modern UI components, integrate APIs, and deliver high-performance front-end applications.",
  },
  {
    title: "Node.js Backend Developer",
    description: "Build scalable backend services, manage databases, and ensure secure data handling.",
  },
  {
    title: "UI/UX Designer",
    description: "Design beautiful user experiences and prototypes that bring our products to life.",
  },
  {
    title: "Digital Marketing Executive",
    description: "Plan and execute marketing campaigns to promote our brand and attract clients.",
  }
];

const Career = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background Image */}
      <div
        className="bg-cover bg-center text-white py-32 px-6 text-center relative bg-[url('/images/cara101.avif')]"
      >
        <div className="absolute inset-0 bg-opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold animate-fadeInDown leading-tight">
            Discover Your Future at ADRS Technosoft
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto animate-fadeInUp">
            Join our team of creators, thinkers, and doers who are passionate about building impactful digital products.
          </p>
        </div>
      </div>

      {/* Why Join Us Section */}
      <section className="py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Why Join Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700 text-lg">
          <div className="bg-[#e6f0bb] p-6 rounded-xl shadow hover:shadow-md transition">
            🌟 A creative and inclusive work environment
          </div>
          <div className="bg-[#e6f0bb] p-6 rounded-xl shadow hover:shadow-md transition">
            🧠 Opportunities to grow & lead real projects
          </div>
          <div className="bg-[#e6f0bb] p-6 rounded-xl shadow hover:shadow-md transition">
            🎯 Flexible work hours & hybrid model
          </div>
          <div className="bg-[#e6f0bb] p-6 rounded-xl shadow hover:shadow-md transition">
            🏆 Recognition, rewards, and mentorship
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-16 px-4 md:px-20 bg-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Current Openings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-[#e6f0bb] p-6 rounded-2xl shadow-lg w-full max-w-sm hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-3">{role.title}</h3>
              <p className="text-gray-600 mb-6">{role.description}</p>
              <Link
                to="/spark/registration"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Career;
