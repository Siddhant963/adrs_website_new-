/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegBookmark, FaBookmark, FaShareAlt, FaRegComment, FaSearch } from 'react-icons/fa';
import { FiClock, FiCalendar} from 'react-icons/fi';

const Blog = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());
  const [activeSort, setActiveSort] = useState('newest');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('devBlogBookmarks');
    if (savedBookmarks) {
      setBookmarkedPosts(new Set(JSON.parse(savedBookmarks)));
    }
  }, []);

  // Expanded blog data with more posts
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the fundamentals of React including components, state, and props.",
      content: `<p>React is a JavaScript library for building user interfaces. It's component-based and allows you to create reusable UI components.</p>
                <h2>Key Concepts</h2>
                <h3>Components</h3>
                <p>Components are the building blocks of React applications.</p>
                <h3>State</h3>
                <p>State allows components to manage their own data.</p>
                <h3>Props</h3>
                <p>Props are used to pass data between components.</p>`,
      date: "2023-05-15",
      readTime: "5 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: {
        name: "Sarah Johnson",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        bio: "Frontend Developer"
      },
      tags: ["react", "frontend", "javascript"],
      likes: 124,
      comments: 28
    },
    {
      id: 2,
      title: "CSS Flexbox Complete Guide",
      excerpt: "Master CSS Flexbox layout with this comprehensive guide.",
      content: `<p>Flexbox is a powerful layout system in CSS that makes it easy to design flexible responsive layouts.</p>
                <h2>Flex Container Properties</h2>
                <p>display, flex-direction, flex-wrap, justify-content, align-items, align-content</p>
                <h2>Flex Item Properties</h2>
                <p>order, flex-grow, flex-shrink, flex-basis, align-self</p>`,
      date: "2023-04-10",
      readTime: "7 min read",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: {
        name: "Mike Chen",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "UI/UX Designer"
      },
      tags: ["css", "flexbox", "layout"],
      likes: 89,
      comments: 15
    },
    {
      id: 3,
      title: "JavaScript ES6 Features",
      excerpt: "Explore the most useful ES6 features every developer should know.",
      content: `<p>ECMAScript 2015 (ES6) introduced many new features to JavaScript.</p>
                <h2>Key Features</h2>
                <p>let and const, arrow functions, template literals, destructuring, spread operator, promises</p>`,
      date: "2023-03-22",
      readTime: "6 min read",
      category: "JavaScript",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: {
        name: "David Kim",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        bio: "JavaScript Developer"
      },
      tags: ["javascript", "es6", "web"],
      likes: 145,
      comments: 32
    },
    {
      id: 4,
      title: "Node.js for Beginners",
      excerpt: "Learn how to build server-side applications with Node.js.",
      content: `<p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
                <h2>Core Concepts</h2>
                <p>Modules, NPM, Event Loop, File System, HTTP Module</p>`,
      date: "2023-02-18",
      readTime: "8 min read",
      category: "Node.js",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: {
        name: "Emma Wilson",
        avatar: "https://randomuser.me/api/portraits/women/33.jpg",
        bio: "Backend Developer"
      },
      tags: ["node", "backend", "javascript"],
      likes: 76,
      comments: 12
    },
    {
      id: 5,
      title: "Responsive Web Design Principles",
      excerpt: "Essential principles for creating websites that work on all devices.",
      content: `<p>Responsive design ensures your website looks good on all devices.</p>
                <h2>Key Principles</h2>
                <p>Fluid grids, flexible images, media queries, mobile-first approach</p>`,
      date: "2023-01-05",
      readTime: "5 min read",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: {
        name: "Lisa Wong",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        bio: "Web Designer"
      },
      tags: ["design", "responsive", "ui"],
      likes: 112,
      comments: 24
    },
    {
      id: 6,
      title: "Git and GitHub Basics",
      excerpt: "Learn version control with Git and how to collaborate using GitHub.",
      content: `<p>Git is a distributed version control system that helps track changes in source code.</p>
                <h2>Essential Commands</h2>
                <p>git init, git clone, git add, git commit, git push, git pull, git branch</p>`,
      date: "2022-12-15",
      readTime: "6 min read",
      category: "Tools",
      image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      author: {
        name: "James Smith",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        bio: "DevOps Engineer"
      },
      tags: ["git", "github", "version-control"],
      likes: 98,
      comments: 18
    }
  ];

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'popular', label: 'Most Popular' }
  ];

  const filteredPosts = useMemo(() => {
    let result = blogPosts.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    switch (activeSort) {
      case 'newest':
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'popular':
        result.sort((a, b) => b.likes - a.likes);
        break;
      default:
        break;
    }

    return result;
  }, [blogPosts, activeCategory, searchQuery, activeSort]);

  const handlePostClick = () => {
    navigate(`/spark/blog`);
  };

  const toggleBookmark = (postId, e) => {
    e.stopPropagation();
    const newBookmarks = new Set(bookmarkedPosts);
    if (newBookmarks.has(postId)) {
      newBookmarks.delete(postId);
    } else {
      newBookmarks.add(postId);
    }
    setBookmarkedPosts(newBookmarks);
    localStorage.setItem('devBlogBookmarks', JSON.stringify(Array.from(newBookmarks)));
  };

  const sharePost = (post, e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: `${window.location.origin}/blog/${post.id}`
      }).catch(err => console.log('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/blog/${post.id}`);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Developer Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about web development with our collection of tutorials and articles.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-gray-600">Sort by:</span>
            <div className="flex flex-wrap gap-2">
              {sortOptions.map(option => (
                <button
                  key={option.value}
                  onClick={() => setActiveSort(option.value)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    activeSort === option.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Post</h2>
            <div 
              className="rounded-2xl overflow-hidden cursor-pointer transition-shadow hover:shadow-2xl bg-white shadow-xl"
              onClick={() => handlePostClick()}
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/2">
                  <img 
                    className="h-full w-full object-cover" 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title} 
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {filteredPosts[0].category}
                    </span>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={(e) => toggleBookmark(filteredPosts[0].id, e)}
                        className="text-gray-400 hover:text-yellow-500 transition-colors"
                        aria-label="Bookmark post"
                      >
                        {bookmarkedPosts.has(filteredPosts[0].id) ? 
                          <FaBookmark className="text-yellow-500" /> : 
                          <FaRegBookmark />}
                      </button>
                      <button 
                        onClick={(e) => sharePost(filteredPosts[0], e)}
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                        aria-label="Share post"
                      >
                        <FaShareAlt />
                      </button>
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-3 text-gray-900">{filteredPosts[0].title}</h2>
                  
                  <p className="mt-2 mb-4 text-gray-600">
                    {filteredPosts[0].excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {filteredPosts[0].tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img 
                          className="h-10 w-10 rounded-full" 
                          src={filteredPosts[0].author.avatar} 
                          alt={filteredPosts[0].author.name} 
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{filteredPosts[0].author.name}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <FiCalendar className="mr-1" />
                          <time dateTime={filteredPosts[0].date}>
                            {new Date(filteredPosts[0].date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                          <FiClock className="ml-2 mr-1" />
                          <span>{filteredPosts[0].readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="flex items-center text-sm text-gray-600">
                        <FaRegComment className="mr-1" />
                        {filteredPosts[0].comments}
                      </span>
                      <span className="flex items-center text-sm text-gray-600">
                        ❤️ {filteredPosts[0].likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Latest Articles</h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.slice(1).map((post) => (
                <div 
                  key={post.id} 
                  className="rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white shadow-md"
                  onClick={() => handlePostClick()}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                      src={post.image} 
                      alt={post.title} 
                    />
                    <button 
                      onClick={(e) => toggleBookmark(post.id, e)}
                      className="absolute top-2 right-2 p-2 rounded-full bg-white/80 text-gray-700 hover:text-yellow-500 transition-colors"
                      aria-label="Bookmark post"
                    >
                      {bookmarkedPosts.has(post.id) ? 
                        <FaBookmark className="text-yellow-500" /> : 
                        <FaRegBookmark />}
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                        {post.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-500">
                        <FiClock className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h3>
                    
                    <p className="mb-4 text-gray-600">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          className="h-8 w-8 rounded-full mr-2" 
                          src={post.author.avatar} 
                          alt={post.author.name} 
                        />
                        <span className="text-sm text-gray-700">{post.author.name}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={(e) => sharePost(post, e)}
                          className="p-1 rounded-full text-gray-500 hover:text-blue-600 transition-colors"
                          aria-label="Share post"
                        >
                          <FaShareAlt size={14} />
                        </button>
                        <span className="text-xs text-gray-600">
                          ❤️ {post.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 rounded-xl bg-white">
            <svg 
              className="mx-auto h-12 w-12 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-medium mt-4 text-gray-700">No articles found</h3>
            <p className="mt-2 text-gray-600">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Popular Tags */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Browse by Topic</h2>
          <div className="flex flex-wrap gap-3">
            {Array.from(new Set(blogPosts.flatMap(post => post.tags)))
              .slice(0, 15)
              .map(tag => (
                <button
                  key={tag}
                  onClick={() => {
                    setSearchQuery(tag);
                    setActiveCategory('All');
                  }}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                >
                  #{tag}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;