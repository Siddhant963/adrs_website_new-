import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HiOutlineLightBulb, 
  HiOutlineAcademicCap, 
  HiOutlineUsers, 
  HiOutlineTrendingUp, 
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineSparkles,
  HiOutlineBookOpen,
  HiOutlineChartBar,
  HiOutlineBadgeCheck,
  HiOutlineHeart
} from 'react-icons/hi';
import { FiArrowRight, FiStar, FiCheck } from 'react-icons/fi';

const WhyADRSSpark = () => {
  const features = [
    {
      icon: <HiOutlineAcademicCap className="w-8 h-8" />,
      title: "Expert-Led Curriculum",
      description: "Learn from industry veterans with 1+ years of real-world experience in digital marketing and business strategy.",
      color: "blue"
    },
    {
      icon: <HiOutlineTrendingUp className="w-8 h-8" />,
      title: "Career Growth Focused",
      description: "95% of our graduates report significant career advancement within 6 months of course completion.",
      color: "green"
    },
    {
      icon: <HiOutlineUsers className="w-8 h-8" />,
      title: "Community Network",
      description: "Join a thriving community of 100+ professionals across various industries and career levels.",
      color: "purple"
    },
    {
      icon: <HiOutlineGlobeAlt className="w-8 h-8" />,
      title: "Global Recognition",
      description: "Our certifications are recognized by leading companies worldwide, opening doors to international opportunities.",
      color: "indigo"
    },
    {
      icon: <HiOutlineShieldCheck className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "All courses undergo rigorous quality checks and are updated quarterly to reflect industry best practices.",
      color: "emerald"
    },
    {
      icon: <HiOutlineClock className="w-8 h-8" />,
      title: "Flexible Learning",
      description: "Self-paced learning with lifetime access to course materials and regular live mentorship sessions.",
      color: "amber"
    }
  ];

  const stats = [
    { number: "50+", label: "Students Enrolled", icon: <HiOutlineUsers /> },
    { number: "100%", label: "Success Rate", icon: <HiOutlineTrendingUp /> },
    { number: "10+", label: "Expert Instructors", icon: <HiOutlineAcademicCap /> },
    { number: "4.5/5", label: "Average Rating", icon: <FiStar /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Digital Marketing Manager at Google",
      content: "ADRS Spark transformed my career. The practical approach and expert mentorship helped me land my dream job at Google.",
      avatar: "SJ",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, TechStart Solutions",
      content: "The strategic insights I gained from ADRS Spark directly contributed to scaling my startup from 10 to 100 employees.",
      avatar: "MC",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director at Microsoft",
      content: "Best investment in my professional development. The network and knowledge I gained here continue to benefit me daily.",
      avatar: "ER",
      rating: 5
    }
  ];

  const advantages = [
    "Industry-leading curriculum updated quarterly",
    "Personal mentorship from C-level executives",
    "Guaranteed job placement assistance",
    "Lifetime access to all course materials",
    "Global networking opportunities",
    "Hands-on project-based learning"
  ];

  return (
    <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-green-600 text-white mb-8 shadow-lg">
            <HiOutlineLightBulb className="w-4 h-4 mr-2" />
            Why Choose ADRS Spark
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            Your Success is Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Mission
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            We don&apos;t just teach courses – we transform careers. Join thousands of professionals who&apos;ve 
            accelerated their growth with our proven methodology and expert guidance.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3 text-green-600">
                  {React.cloneElement(stat.icon, { className: "w-8 h-8" })}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience the difference that comes from learning with industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-300/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`inline-flex p-3 rounded-xl mb-6 bg-${feature.color}-100 text-${feature.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 mb-6">
                <HiOutlineSparkles className="w-4 h-4 mr-2" />
                Our Advantages
              </span>
              
              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Why 50+ Professionals Choose ADRS Spark
              </h2>
              
              <div className="space-y-4 mb-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <FiCheck className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-slate-700 font-medium">{advantage}</p>
                  </div>
                ))}
              </div>
              <Link to="/spark/registration">
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl group">
                Start Your Journey
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button> </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 border border-slate-300/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/80 rounded-2xl shadow-sm">
                    <HiOutlineBookOpen className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                    <div className="text-2xl font-bold text-slate-900">25+</div>
                    <div className="text-sm text-slate-600">Courses Available</div>
                  </div>
                  <div className="text-center p-6 bg-white/80 rounded-2xl shadow-sm">
                    <HiOutlineChartBar className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                    <div className="text-2xl font-bold text-slate-900">85%</div>
                    <div className="text-sm text-slate-600">Salary Increase</div>
                  </div>
                  <div className="text-center p-6 bg-white/80 rounded-2xl shadow-sm">
                    <HiOutlineBadgeCheck className="w-12 h-12 text-purple-600 mb-4 mx-auto" />
                    <div className="text-2xl font-bold text-slate-900">100%</div>
                    <div className="text-sm text-slate-600">Job Guarantee</div>
                  </div>
                  <div className="text-center p-6 bg-white/80 rounded-2xl shadow-sm">
                    <HiOutlineHeart className="w-12 h-12 text-red-500 mb-4 mx-auto" />
                    <div className="text-2xl font-bold text-slate-900">4.9</div>
                    <div className="text-sm text-slate-600">Student Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Hear from professionals who transformed their careers with ADRS Spark
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-300/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#f0fdfa] via-[#e0f2fe] to-[#fefce8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">Ready to Transform Your Career?</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of professionals who&apos;ve accelerated their growth with{" "}
            <span className="text-indigo-700 font-semibold">ADRS Spark</span>. Your success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/spark/allcourses">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-xl">
              Explore Courses
            </button> </Link>
            <Link to="/contact">
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300">
              Book Free Consultation
            </button> </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyADRSSpark;