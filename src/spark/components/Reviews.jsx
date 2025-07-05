"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      id: 1,
      name: "wamika singh",
      role: "Data Scientist",
      company: "TechCorp",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The Advanced Machine Learning course completely transformed my career. The hands-on projects and personalized feedback from instructors helped me land my dream job. Highly recommend!",
      rating: 5,
      type: "positive",
    },
    {
      id: 2,
      name: "Mukesh singh",
      role: "Business Analyst",
      company: "Finance Plus",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Business Intelligence course was comprehensive and well-structured. While some sections could have gone deeper, overall it provided good value and practical skills I use daily.",
      rating: 4,
      type: "neutral",
    },
    {
      id: 3,
      name: "Ananya Sharma",
      role: "AI Engineer",
      company: "InnovateTech",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The Deep Learning Specialization exceeded all my expectations. The instructors were incredibly knowledgeable and the course materials were cutting-edge. Worth every penny!",
      rating: 5,
      type: "positive",
    },
    {
      id: 4,
      name: "Swapnil Desai",
      role: "Product Manager",
      company: "SoftSolutions",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "AI for Business Leaders provided good insights, though I found some concepts needed more practical examples. The networking opportunities with other professionals were valuable.",
      rating: 3,
      type: "neutral",
    },
    {
      id: 5,
      name: "Neeraj Kumar",
      role: "Data Engineer",
      company: "CloudScale",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The Data Engineering Pipeline course was exactly what I needed to advance in my role. The instructors were responsive and the community support was outstanding.",
      rating: 5,
      type: "positive",
    },
  ]

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1))
  }

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1))
  }

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
      ))
  }

  const currentReview = reviews[currentIndex]
  const nextReviewIndex = (currentIndex + 1) % reviews.length
  const prevReviewIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1

  return (
    <div className="bg-[#F8FFF4] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2E3D2F]">What Our Students Say</h2>
          <p className="text-[#2E3D2F]/70 max-w-2xl mx-auto">
            Hear from our community of learners who have transformed their careers with ADRS Spark
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-[#D6EFC5]">
            <div className="flex items-center mb-4">
              <img src={currentReview.image} alt={currentReview.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="font-bold text-lg text-[#2E3D2F]">{currentReview.name}</h3>
                <p className="text-[#2E3D2F]/70">
                  {currentReview.role} at {currentReview.company}
                </p>
              </div>
            </div>
            <div className="flex mb-4">{renderStars(currentReview.rating)}</div>
            <p className="text-[#2E3D2F] italic mb-4">"{currentReview.content}"</p>
            <div
              className={`text-sm font-semibold ${
                currentReview.type === "positive"
                  ? "text-[#5B8C5A]"
                  : currentReview.type === "neutral"
                    ? "text-[#C9AD5F]"
                    : "text-red-600"
              }`}
            >
              {currentReview.type.charAt(0).toUpperCase() + currentReview.type.slice(1)} Review
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button onClick={prevReview} className="bg-[#B2CD9C] rounded-full p-2 shadow hover:bg-[#A0BC8C]">
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button onClick={nextReview} className="bg-[#B2CD9C] rounded-full p-2 shadow hover:bg-[#A0BC8C]">
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        {/* Desktop 3-Review Display */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {[prevReviewIndex, currentIndex, nextReviewIndex].map((index, i) => {
            const review = reviews[index]
            return (
              <div
                key={review.id}
                className={`bg-white rounded-xl shadow-lg p-6 border ${
                  i === 1 ? "scale-105 border-[#B2CD9C]" : "opacity-80 border-[#D6EFC5]"
                } transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h3 className="font-bold text-lg text-[#2E3D2F]">{review.name}</h3>
                    <p className="text-[#2E3D2F]/70">
                      {review.role} at {review.company}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">{renderStars(review.rating)}</div>
                <p className="text-[#2E3D2F] italic mb-4">"{review.content}"</p>
                <div
                  className={`text-sm font-semibold ${
                    review.type === "positive"
                      ? "text-[#5B8C5A]"
                      : review.type === "neutral"
                        ? "text-[#C9AD5F]"
                        : "text-red-600"
                  }`}
                >
                  {review.type.charAt(0).toUpperCase() + review.type.slice(1)} Review
                </div>
              </div>
            )
          })}
        </div>

        <div className="hidden md:flex justify-center mt-8 space-x-4">
          <button onClick={prevReview} className="bg-[#B2CD9C] rounded-full p-3 hover:bg-[#A0BC8C]">
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button onClick={nextReview} className="bg-[#B2CD9C] rounded-full p-3 hover:bg-[#A0BC8C]">
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Review Categories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#5B8C5A]">
            <h3 className="text-xl font-bold mb-2 text-[#5B8C5A]">Positive Experiences</h3>
            <p className="text-[#2E3D2F]/70">
              Our courses have helped thousands of students advance their careers and achieve their professional goals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C9AD5F]">
            <h3 className="text-xl font-bold mb-2 text-[#C9AD5F]">Balanced Feedback</h3>
            <p className="text-[#2E3D2F]/70">
              We value all feedback and continuously improve our courses based on student suggestions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#B2CD9C]">
            <h3 className="text-xl font-bold mb-2 text-[#2E3D2F]">Success Stories</h3>
            <p className="text-[#2E3D2F]/70">
              Read about how our alumni have transformed their careers after completing our programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews