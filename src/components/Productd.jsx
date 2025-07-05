import { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'ADRS SPARK LMS',
    description: 'Our Learning Management System Software is designed to simplify the teaching and learning process through an intuitive, feature-rich platform that supports both traditional and modern e-learning methodologies.',
    detailedDescription: 'ADRS LearnPro LMS offers a comprehensive suite of tools for course creation, student management, and progress tracking. With features like interactive quizzes, video conferencing integration, and mobile accessibility, it revolutionizes the learning experience for both educators and students.',
    features: [
      'Interactive course builder',
      'Automated grading system',
      'Real-time analytics dashboard',
      'Mobile learning app',
      'Secure payment integration'
    ],
    image: 'https://img.freepik.com/free-vector/smart-agriculture-isometric-background_1284-30161.jpg'
  },
  {
    id: 2,
    title: 'ADRS Gem Control',
    description: 'At ADRS Technosoft, we have developed a comprehensive Jewelry Shop Management System, tailored to meet the operational and inventory needs of jewelry businesses.',
    detailedDescription: 'ADRS GemPro streamlines jewelry business operations with inventory management, customer relationship tools, and sales tracking. The system includes barcode scanning, gemstone certification tracking, and multi-location support for growing businesses.',
    features: [
      'Inventory management with images',
      'Customer purchase history',
      'Gemstone certification tracking',
      'Sales commission calculator',
      'Multi-branch support'
    ],
    image: 'https://img.freepik.com/free-vector/drone-agriculture-concept-illustration_114360-9331.jpg',
  }
];

const Product = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleMoreClick = (product) => {
    setSelectedProduct(product);
    setShowDetail(true);
  };

  return (
    <div className="min-h-screen bg-[#000] py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">Our Smart Products</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#e6f0bb] rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
              <p className="text-gray-600 mt-2 line-clamp-3">{product.description}</p>
              <div className="mt-4 text-right">
                <button
                  onClick={() => handleMoreClick(product)}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {showDetail && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-green-700 mb-4">{selectedProduct.title}</h3>
                <button 
                  onClick={() => setShowDetail(false)}
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
                    src={selectedProduct.image} 
                    alt={selectedProduct.title} 
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 mb-4">{selectedProduct.detailedDescription}</p>
                  
                  <h4 className="font-semibold text-lg text-gray-800 mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 mb-6 space-y-1">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-4">
                  
                    <Link to="/contact">
                    <button className="bg-blue-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-lg transition-colors">
                      Contact For Demo
                    </button> </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={selectedVideo}
                title="Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;