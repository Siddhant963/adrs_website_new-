import { useState, useMemo } from 'react';
import { Filter, Clock, Users, Award, Star, ChevronDown, X, BookOpen, Share2 } from 'lucide-react';
import { coursesFlat } from '../data/CoursesFlat';
import { Link } from 'react-router-dom';

// Mock data remains the same as befor

const AllCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories
  const categories = ['All', ...new Set(coursesFlat.map(course => course.category))];

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    let filtered = coursesFlat.filter(course => {
      const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructors.some(instructor => instructor.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    // Sort courses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        case 'students':
          return b.students - a.students;
        case 'duration':
          return parseInt(a.duration) - parseInt(b.duration);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSortBy('name');
  };

  function formatINR(amount) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(amount);
  }



  const CourseCard = ({ course }) => (

    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
      {/* Image & badges */}
      <div className="relative overflow-hidden">
        <Link key={course}
              to={`/spark/courses/${course.id}`}>
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        /> </Link>
        <div className="absolute top-4 right-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-sm">
            <Star className="w-4 h-4 fill-blue-400 text-blue-400" />
            <span className="text-sm font-semibold">{course.rating}</span>
          </div>
        </div>
      </div>

      {/* Card content: flexible column */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-semibold">
            {course.category}
          </span>

          <span className="text-xl font-bold text-blue-600">
            {(course.price)}

          </span>

        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
          {course.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

        <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            <span>{course.students.toLocaleString()}</span>
          </div>
        </div>

        {/* Spacer pushes buttons down */}
        <div className="flex-grow"></div>

        {/* Buttons: stay at bottom */}
        <div className="flex gap-2 mt-auto">
          <Link to={'/spark/registration'}>
            <button className="flex-1 bg-blue-600 text-white py-2.5 px-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <Award className="w-4 h-4" />
              Enroll Now
            </button>
          </Link>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Check out this course!',
                  text: 'I found this amazing course:',
                  url: window.location.href,
                }).then(() => {
                  console.log('Thanks for sharing!');
                }).catch(console.error);
              } else {
                // fallback: copy to clipboard
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }
            }}
            className="p-3.5 rounded-lg border border-gray-200 hover:border-blue-300 text-gray-500 hover:text-blue-500 transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </button>

        </div>
      </div>
    </div>

  );
  

  const StatsCard = ({ icon: Icon, title, value }) => (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xl font-bold text-gray-900">{value}</p>
          <p className="text-gray-600 font-medium">{title}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/spark-images/course-hero.avif')" }}
      >
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content must be relative and above overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-5 py-2 rounded-full mb-6">
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">Transform Your Career</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Learn In-Demand Skills
            <span className="block text-blue-300">From Industry Experts</span>
          </h1>

          <p className="text-white text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            Join thousands of professionals learning cutting-edge skills with our premium courses.
          </p>
        </div>
      </div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto mb-8">
            {/* <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> */}
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-medium">Filters</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>

              {showFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                  <span>Clear all</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              >
                <option value="name">Name</option>
                <option value="rating">Rating</option>
                <option value="students">Students</option>
                <option value="duration">Duration</option>
              </select>
            </div>
          </div>

          {showFilters && (
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 mb-8">
              <h3 className="font-medium text-gray-900 mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {selectedCategory === 'All' ? 'All Courses' : selectedCategory}
          </h2>
          <p className="text-gray-600 mb-6">
            Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
            {searchTerm && (
              <span> for "<span className="font-medium">{searchTerm}</span>"</span>
            )}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />

            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Learn With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quality education designed to help you succeed in your career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Industry-Recognized Certificates</h3>
              <p className="text-gray-600">
                Earn certificates that employers value to advance your career.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from professionals with real-world experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Learning</h3>
              <p className="text-gray-600">
                Study at your own pace with lifetime access to course materials.
              </p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default AllCourses;