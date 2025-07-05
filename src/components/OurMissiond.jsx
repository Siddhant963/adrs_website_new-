import { useEffect } from "react";
import { Link } from "react-router-dom";

const OurMission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative text-white py-32 bg-cover bg-center"style={{ backgroundImage: "url('/images/team/hero-team.avif')" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fadeIn delay-100">
            Driving innovation through digital excellence and reliable solutions
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Mission Content */}
      <div className="container mx-auto px-4 py-16 bg-black">
        <div className="max-w-4xl mx-auto bg-[#e6f0bb] rounded-xl shadow-lg overflow-hidden mb-16 transform transition-all hover:scale-[1.01] duration-300">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#000] mb-6">
              Empowering Your Digital Future
            </h2>
            <p className="text-lg text-black mb-6">
              At ADRS, our mission is to deliver cutting-edge digital solutions that transform businesses and create lasting value for our clients. We combine technical expertise with innovative thinking to solve complex challenges in today&apos;s rapidly evolving digital landscape.
            </p>
            <div className="h-1 bg-gradient-to-r from-[#3498db] to-[#2c3e50] w-32 mb-8"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#fff] mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-[#e6f0bb] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#3498db]">
              <div className="text-5xl text-[#3498db] mb-4">01</div>
              <h3 className="text-xl font-bold text-[#2c3e50] mb-4">Innovation</h3>
              <p className="text-gray-700">
                We push boundaries and explore new possibilities to deliver solutions that set you apart in the marketplace.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-[#e6f0bb] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#e74c3c]">
              <div className="text-5xl text-[#e74c3c] mb-4">02</div>
              <h3 className="text-xl font-bold text-[#2c3e50] mb-4">Reliability</h3>
              <p className="text-gray-700">
                Our solutions are built to last, with robust architectures and thorough testing to ensure uninterrupted performance.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-[#e6f0bb] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#2ecc71]">
              <div className="text-5xl text-[#2ecc71] mb-4">03</div>
              <h3 className="text-xl font-bold text-[#2c3e50] mb-4">Client Focus</h3>
              <p className="text-gray-700">
                Your success is our priority. We listen, understand, and tailor our approach to meet your unique business needs.
              </p>
            </div>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-[#e6f0bb] rounded-xl p-8 md:p-12 text-black">
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <p className="text-lg mb-6">
              We are dedicated to maintaining the highest standards of quality, integrity, and professionalism in everything we do. Our team of experts works tirelessly to ensure that every solution we deliver not only meets but exceeds expectations.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-black text-[#fff] px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#e6f0bb] text-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-xl">Satisfied Clients</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold mb-2">1+</div>
              <div className="text-xl">Years of Experience</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-xl">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;