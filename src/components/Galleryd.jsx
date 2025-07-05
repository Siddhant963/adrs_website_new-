const Gallery = () => {
  const images = [
    'p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg',
    'p5.jpg', 'p6.jpg', 'p7.jpg', 'p1.jpg'
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-104 flex flex-col justify-center  items-center bg-cover bg-center bg-[url('/images/gallery/p1.jpg')]">
      </div>

      {/* Gallery Container */}
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Explore Our Moments</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx}>
              <img
                src={`images/gallery/${img}`}
                alt={`Image ${idx + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
