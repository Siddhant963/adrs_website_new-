import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { coursesFlat } from "../data/CoursesFlat"
import { Link } from "react-router-dom"
import { FiExternalLink } from "react-icons/fi"

const HeroSection = () => {
  const [showMoreCourses, setShowMoreCourses] = useState(false)


  return (
    <div className="w-full">

      {/* ✅ Hero Section */}
      <div className="relative bg-gradient-to-r from-[#B2CD9C] to-[#A0C49D] text-[#1B3B2F]">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Transform Your Career with ADRS Spark</h1>
              <p className="text-xl mb-8">Industry-leading training programs to accelerate your professional growth</p>
              <Link to="/spark/allcourses">
              <button className="bg-white text-[#4A705A] px-8 py-3 rounded-lg font-semibold hover:bg-[#f0f9ea] transition duration-300">
                Explore Programs
              </button>
              </Link>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img src="./images/spark-images/training1.jpg"
                alt="Training Session"
                className="rounded-lg shadow-lg"
              />
              <img src="./images/spark-images/training2.jpg"
                alt="Workshop"
                className="rounded-lg shadow-lg mt-10"
              />
              <img src="./images/spark-images/training3.jpg"
                alt="Certification"
                className="rounded-lg shadow-lg"
              />
              <img src="./images/spark-images/training4.jpg"
                alt="Online Learning"
                className="rounded-lg shadow-lg mt-10"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}></div>
      </div>

      {/* ✅ Courses Section */}
      <div className="bg-[#EAF3E2]">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1B3B2F]">Our Featured Courses</h2>
            <p className="text-[#4A705A] max-w-2xl mx-auto">
              Designed by industry experts to help you master the skills that employers need most
            </p>
          </div>

          
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesFlat.map((course) => (
            <Link key={course} to={`/spark/courses/${course.id}`}>
              <div key={course.id} className="bg-white mx-4 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img src={course.image} alt={course.name} className="w-full h-64 object-center" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[#1B3B2F]">{course.name}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#4A705A] font-semibold">{course.duration}</span>
                    <Link
                      key={course}
                      to={`/spark/courses/${course.id}`}>
                      <button className="text-sm bg-[#B2CD9C] text-[#1B3B2F] px-3 py-1 rounded-full hover:bg-[#A0C49D] transition duration-300">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div> </Link>
            ))}
          </div>

          <div className="flex justify-center" >
            <Link
              to="/spark/allcourses"
              className="inline-flex items-center justify-center mt-12 px-6 py-3 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View all courses
              <FiExternalLink className="ml-2 w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </div >
  )
}

export default HeroSection