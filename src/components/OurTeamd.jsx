const teamData = {
  founders: [
    {
      name: "Abhishek Dubey",
      role: "Founder",
      image: "./images/team/abhi4.jpeg"
    },
    {
      name: "Ritesh Saket",
      role: "Co-Founder",
      image: "./images/team/ritesh.jpg"
    },
    {
      name: "Piyush Khare",
      role: "Co-Founder",
      image: "./images/team/piyush2.jpg"
    }
  ],
  technical: [
    {
      name: "Siddhant Dubey",
      role: "Technical Lead",
      image: "./images/team/Siddhant_jfif.webp"
    },
    {
      name: "Ishant Patel",
      role: "Backend Developer",
      image: "./images/team/ishantpic.jpg"
    },
    {
      name: "Sapeksh Vishwakarma",
      role: "Frontend Developer",
      image: "./images/team/sapekshpic.JPG"
    }
  ]
};

const OurTeam = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div
        className="w-full h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/team/hero-team.avif')" }}
      >
        <div className="bg-opacity-60 p-8 rounded-lg text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Meet Our Dynamic Team</h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            From visionaries to builders — the force behind ADRS Technosoft&apos;s innovation and excellence.
          </p>
        </div>
      </div>

      {/* Founders Section */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-10 underline">Founding Visionaries</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamData.founders.map((member, index) => (
            <div
              key={index}
              className="bg-[#e6f0bb] rounded-2xl shadow-lg overflow-cover hover:shadow-xl transition-transform transform hover:-translate-y-1 p-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Team Section */}
      <section className="py-16 px-4 bg-black text-center">
        <h2 className="text-3xl font-bold text-white mb-10 underline">Technical Wizards</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamData.technical.map((member, index) => (
            <div
              key={index}
              className="bg-[#e6f0bb] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-1 p-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
