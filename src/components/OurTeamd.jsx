import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const teamData = {
  founders: [
    {
      name: "Mr. Abhishek Dubey",
      role: "Founder & CEO",
      image: "./images/team/Abhi.jpg",
    },
  ],
  technical: [
    { name: "Piyush Khare", role: "Full Stack Developer", image: "./images/team/Piyush.jpg" },
    { name: "Siddhant Dubey", role: "Chief Technical Officer", image: "./images/team/Sid.jpg" },
    { name: "Aman Vishwakarma", role: "Full Stack Developer", image: "./images/team/AmanV.jpg" },
    { name: "Ishant Patel", role: "Team Lead & Full Stack Developer", image: "./images/team/Ishant.jpg" },
    { name: "Sapeksh Vishwakarma", role: "Full Stack Developer", image: "./images/team/sapekshpic.JPG" },
  ],
};

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.25)" },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const closeModal = () => setSelectedMember(null);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background floating shapes */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute w-48 h-48 bg-blue-500/20 rounded-full top-10 left-10 blur-3xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 5 }}
          />
          <motion.div
            className="absolute w-32 h-32 bg-purple-500/20 rounded-full bottom-20 right-20 blur-3xl"
            animate={{ y: [0, 20, 0], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 6, delay: 1 }}
          />
        </div>

        {/* Title */}
        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 md:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Meet Our Visionary Team
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-300">
            Innovators, creators, and leaders driving ADRS Technosoft to new heights.
          </p>
          <motion.div
            className="mt-6 flex justify-center gap-2"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="w-12 h-1 bg-blue-500 rounded-full" />
            <span className="w-8 h-1 bg-purple-500 rounded-full" />
            <span className="w-4 h-1 bg-pink-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Founding Visionaries
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
          {teamData.founders.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/80 rounded-2xl p-8 w-full sm:w-80 hover:bg-gray-700/80 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              onClick={() => setSelectedMember(member)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 object-cover rounded-full mx-auto mb-6 border-4 border-blue-500/60 shadow-lg"
              />
              <h3 className="text-2xl font-semibold text-center">{member.name}</h3>
              <p className="text-gray-400 text-center">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Team Section */}
      <section className="py-20 px-4 bg-gray-900/90">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Technical Wizards
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {teamData.technical.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/80 rounded-2xl p-6 cursor-pointer hover:bg-gray-700/80 transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              onClick={() => setSelectedMember(member)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-36 h-36 object-cover rounded-full mx-auto mb-4 border-2 border-blue-400/70 shadow-md"
              />
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              <p className="text-gray-400 text-center">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="bg-gray-800 rounded-2xl p-8 max-w-md mx-4 relative shadow-2xl">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                onClick={closeModal}
                aria-label="Close modal"
              >
                ✕
              </button>
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-2 border-blue-400/70"
              />
              <h3 className="text-2xl font-bold text-center">{selectedMember.name}</h3>
              <p className="text-gray-300 text-center mb-4">{selectedMember.role}</p>
              <p className="text-gray-400 text-center">
                {selectedMember.bio || "Passionate about building innovative solutions and driving team success."}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurTeam;
