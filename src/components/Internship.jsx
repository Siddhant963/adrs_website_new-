import { Link } from 'react-router-dom';

const Internship = () => {
  const internships = [
    {
      id: 1,
      image: "https://www.raysitworld.com/assets/img/training/web1.gif",
      title: "Web Development"
    },
    {
      id: 2,
      image: "https://www.raysitworld.com/assets/img/training/appdev.gif",
      title: "App Development"
    },
    {
      id: 3,
      image: "https://www.raysitworld.com/assets/img/training/web3.gif",
      title: "Software Development"
    },
    {
      id: 4,
      image: "https://www.raysitworld.com/assets/img/training/interior.gif",
      title: "Social Media Marketing"
    },
    {
      id: 5,
      image: "https://www.raysitworld.com/assets/img/training/mech.gif",
      title: "Digital Marketing"
    },
    {
      id: 6,
      image: "https://www.raysitworld.com/assets/img/training/cad.gif",
      title: "Graphic Designing"
    }
  ];

  return (
    <div className="py-16 bg-[#000]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">ADRS SPARK INTERNSHIP PROGRAM</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {internships.map((internship) => (
            <Link 
              key={internship.id} 
              to="/spark/registration"
              className="bg-[#e6f0bb] border border-white rounded-lg p-4 flex flex-col items-center hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-full h-32 mb-4">
                <img 
                  src={internship.image} 
                  alt={internship.title} 
                  className="w-full h-full object-contain filter grayscale sepia hue-rotate-180"
                />
              </div>
              <h3 className="text-black text-center">{internship.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internship;