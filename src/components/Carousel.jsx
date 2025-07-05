import { useState, useEffect } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Define your slides with clear content and image roles
  const slides = [
    {
      id: 1,
      type: 'content', // Indicate this slide primarily displays text content
      title: 'Welcome to ADRS Technosoft',
      subtitle: 'Innovation Begins Here.',
      image: './images/cara101.avif', // Placeholder: Team collaboration, modern office
      alt: 'Team collaborating in a modern software company office'
    },
    {
      id: 2,
      type: 'image', // Indicate this slide is primarily an image with a subtle overlay
      title: 'Driving Digital Transformation',
      description: 'Leveraging cutting-edge technology for your business growth.',
      image: 'images/cara102.avif', // Placeholder: Code on screen, developer focus
      alt: 'Abstract image of code on a computer screen'
    },
    {
      id: 3,
      type: 'content',
      title: 'Our Expertise, Your Success',
      subtitle: 'Specializing in Web, Mobile, and Cloud Solutions.',
      image: 'images/cara104.avif', 
      alt: 'People brainstorming and collaborating, representing innovation'
    },
    {
      id: 4,
      type: 'call-to-action', 
      title: 'Ready to Transform Your Ideas into Reality?',
      buttonText: 'Get a Free Consultation',
      buttonLink: '/contact', 
      image: 'images/cara103.avif', 
      alt: 'Modern tech workspace with laptops and screens'
    }
  ];

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [slides.length]); // Re-run effect if slides array changes (though unlikely here)

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Background image for all slides for a consistent look */}
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Overlay for better text readability on images */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              {slide.type === 'content' && (
                <div className="text-white">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                    {slide.title}
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl font-light text-yellow-300">
                    {slide.subtitle}
                  </p>
                </div>
              )}

              {slide.type === 'image' && (
                <div className="text-white">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                    {slide.title}
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-200">
                    {slide.description}
                  </p>
                </div>
              )}

              {slide.type === 'call-to-action' && (
                <div className="text-white">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                    {slide.title}
                  </h2>
                  <a href={slide.buttonLink}>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg px-6 sm:px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out shadow-lg">
                      {slide.buttonText}
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 z-20"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 z-20"
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${index === activeIndex ? 'bg-white scale-125' : 'bg-gray-400'} transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;