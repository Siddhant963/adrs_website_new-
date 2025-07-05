import { useParams, Link } from "react-router-dom";
import { coursesFlat } from "../data/CoursesFlat";
import {
  Clock,
  Users,
  Award,
  CheckCircle,
  Play,
  Star,
  Calendar,
  BookOpen,
  Target,
} from "lucide-react";

const CoursePage = () => {
  const { id } = useParams();
  const course = coursesFlat.find((course) => course.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Course Not Found
          </h2>
          <p className="text-gray-600">
            The course you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-100 via-gray-100 to-blue-100 text-slate-800 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 cursor-default shadow-md">
                {course.category}
              </span>

              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-slate-900 tracking-tight">
                  {course.name}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl">
                  {course.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-6 sm:gap-8 text-sm">
                <div className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group">
                  <div className="p-2 rounded-lg bg-slate-200/60 group-hover:bg-blue-100 transition-colors">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{course.duration}</span>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-slate-200/60 group-hover:bg-amber-100 transition-colors">
                    <Target className="w-5 h-5 text-slate-600 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                    {course.level}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group">
                  <div className="p-2 rounded-lg bg-slate-200/60 group-hover:bg-blue-100 transition-colors">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="font-medium">
                    {course.instructors.join(", ")}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:gap-4 gap-3 pt-4">
                <Link to="/spark/registration">
                  <button className="relative bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 group overflow-hidden w-full sm:w-auto justify-center">
                    <span className="relative z-10 flex items-center gap-3">
                      <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
                      Enroll Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 to-gray-200 border-3 border-white shadow-md hover:scale-110 transition-transform duration-200 flex items-center justify-center"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-slate-500"></div>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-slate-600">
                  <p className="font-semibold text-slate-800">
                    50+ professionals
                  </p>
                  <p>completed this program</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-slate-200/40 rounded-full opacity-60 -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-slate-200/40 to-blue-200/40 rounded-full opacity-40 -z-10"></div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-300/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="aspect-video w-full max-w-full bg-gradient-to-br from-slate-200 via-gray-100 to-blue-200 rounded-2xl flex items-center justify-center mb-8 overflow-hidden relative group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  {course.videoUrl && (
                    <video
                      src={course.videoUrl}
                      className="absolute inset-0 w-full h-full object-cover"
                      controls
                    ></video>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900">
                      Course Preview
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-slate-400 rounded-full"></div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Discover the comprehensive curriculum designed by industry
                    experts to transform your digital marketing expertise.
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-5 h-5 text-amber-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-slate-700 font-medium">4.9</span>
                    </div>
                    <span className="text-sm text-slate-500">
                      1,847 reviews
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-slate-100/80 rounded-xl border border-slate-200">
                      <div className="text-2xl font-bold text-blue-600">
                        95%
                      </div>
                      <div className="text-xs text-slate-600">
                        Completion Rate
                      </div>
                    </div>
                    <div className="text-center p-4 bg-slate-100/80 rounded-xl border border-slate-200">
                      <div className="text-2xl font-bold text-slate-700">
                        24/7
                      </div>
                      <div className="text-xs text-slate-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {course.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature}
              </h3>
              <p className="text-gray-600">
                Experience hands-on learning with industry-relevant projects and
                expert guidance.
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-indigo-600" />
                Course Curriculum
              </h2>
              <div className="space-y-4">
                {course.syllabus.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{topic}</h3>
                      <p className="text-sm text-gray-600">
                        Comprehensive coverage with practical exercises
                      </p>
                    </div>
                    <div className="text-gray-400">
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructors */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-indigo-600" />
                Meet Your Instructors
              </h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                {course.instructors.map((instructor, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {instructor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {instructor}
                      </h3>
                      <p className="text-sm text-gray-600">Industry Expert</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">
                          4.5/5
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 lg:sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {course.price}
                </div>
              </div>

              <Link to="/spark/registration">
                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors mb-4">
                  Enroll Now
                </button>
              </Link>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                  <span>Flexible Schedule</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-indigo-600" />
                  <span>Certificate of Completion</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-indigo-600" />
                  <span>Lifetime Community Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="w-4 h-4 text-indigo-600" />
                  <span>Job Placement Support</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">
                  What&apos;s Included:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Video lectures & materials
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Hands-on projects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    1-on-1 mentorship
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Career guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
