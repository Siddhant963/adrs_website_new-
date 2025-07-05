import Carousel from '../components/Carousel';
import Features from '../components/Features';
import Internship from '../components/Internship';
import Servicesd from '../components/Servicesd';

const Home = () => {
  return (
    <div className="bg-[#000] text-white">
      <Carousel />
      
       <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-1 gap-8">
          <Features />
        </div>
      </div>
      
      {/* <Process /> */}
      <Servicesd />
      <Internship />
      
    </div>
  );
};

export default Home;