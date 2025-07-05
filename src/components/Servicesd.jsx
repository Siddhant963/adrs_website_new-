import { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Web Development",
    image: "./images/webdev.jpg",
    alt: "Web Development",
    description: "Comprehensive web solutions tailored to your business needs",
    details: [
      "Custom website development",
      "E-commerce solutions",
      "Responsive design",
      "CMS integration (WordPress, Drupal, etc.)",
      "API development and integration",
      "Website maintenance and support"
    ],
    benefits: [
      "Increased online presence",
      "Improved user experience",
      "Higher conversion rates",
      "SEO-friendly architecture",
      "Scalable solutions"
    ]
  },
  {
    title: "Application Development",
    image: "./images/app_dev.avif",
    alt: "Application Development",
    description: "Powerful applications for mobile and desktop platforms",
    details: [
      "iOS and Android app development",
      "Cross-platform applications",
      "Enterprise software solutions",
      "UI/UX focused design",
      "Cloud integration",
      "App store deployment"
    ],
    benefits: [
      "Enhanced customer engagement",
      "Streamlined business processes",
      "24/7 accessibility",
      "Offline functionality",
      "Secure data handling"
    ]
  },
  {
    title: "Software Development",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56H_si6dRAa90PtGNzLwiY-Irnctx2m-0Kg&s",
    alt: "Software Development",
    description: "Custom software solutions to drive your business forward",
    details: [
      "Custom CRM/ERP systems",
      "Database management",
      "Automation tools",
      "AI/ML integration",
      "Cloud-based solutions",
      "Legacy system modernization"
    ],
    benefits: [
      "Process optimization",
      "Cost reduction",
      "Improved data security",
      "Competitive advantage",
      "Scalable architecture"
    ]
  },
  {
    title: "Digital Marketing",
    image: "./images/carausal30.jpg",
    alt: "Digital Marketing",
    description: "Data-driven strategies to grow your online presence",
    details: [
      "SEO services",
      "Social media marketing",
      "PPC advertising",
      "Content marketing",
      "Email campaigns",
      "Analytics and reporting"
    ],
    benefits: [
      "Increased brand awareness",
      "Higher quality leads",
      "Better conversion rates",
      "Measurable ROI",
      "Targeted audience reach"
    ]
  },
  {
    title: "Logo Design",
    image: "./images/logo_designing.jpg",
    alt: "Logo Design",
    description: "Memorable brand identities that make an impact",
    details: [
      "Custom logo creation",
      "Brand style guides",
      "Multiple design concepts",
      "Vector file formats",
      "Stationery design",
      "Social media branding"
    ],
    benefits: [
      "Strong brand recognition",
      "Professional image",
      "Versatile branding assets",
      "Competitive differentiation",
      "Consistent visual identity"
    ]
  },
  {
    title: "Graphic Design",
    image: "./images/graphic.avif",
    alt: "Graphic Design",
    description: "Visually stunning designs for all your marketing needs",
    details: [
      "Print and digital media",
      "Brochures and flyers",
      "Infographics",
      "Social media graphics",
      "Packaging design",
      "Illustrations"
    ],
    benefits: [
      "Enhanced visual communication",
      "Professional presentation",
      "Increased engagement",
      "Cohesive brand materials",
      "Creative solutions"
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <div className="bg-[#000] min-h-screen py-10 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-white">Our Services</h1>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-[#e6f0bb] rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
            onClick={() => handleServiceClick(service)}
          >
            <img
              src={service.image}
              alt={service.alt}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-black">
                {service.title}
              </h3>
              <p className="text-black mt-2 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Service Detail Modal */}
      {showModal && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{selectedService.title}</h2>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="md:flex gap-6">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.alt} 
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 mb-6">{selectedService.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-3">Service Details:</h3>
                      <ul className="space-y-2">
                        {selectedService.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 mb-3">Key Benefits:</h3>
                      <ul className="space-y-2">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-">
                    <Link to="/contact">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                      Contact Us
                    </button> </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;