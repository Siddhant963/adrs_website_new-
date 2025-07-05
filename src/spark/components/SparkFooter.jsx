import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-[#e0e0e0] text-sm">
      {/* Main Footer */}
      <div className="border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold text-[#B2CD9C] mb-4">
                ADRS Spark
              </h3>
              <p className="text-[#cccccc] mb-4 leading-relaxed text-[14px]">
                Empowering professionals through cutting-edge training and
                education since 2024.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/adrstechno?igsh=MWhjOGdvdXpzOXBwYg==" // <-- Replace with your actual page
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#B2CD9C] hover:text-[#111] transition duration-300"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/adrstechno" // Replace if you use Twitter
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#B2CD9C] hover:text-[#111] transition duration-300"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/adrstechno?igsh=MWhjOGdvdXpzOXBwYg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#B2CD9C] hover:text-[#111] transition duration-300"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/adrs-technology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#1f1f1f] hover:bg-[#B2CD9C] hover:text-[#111] transition duration-300"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 border-b border-[#B2CD9C] inline-block">
                Quick Links
              </h4>
              <ul className="space-y-3 mt-3">
                <li>
                  <a
                    href="/spark/why-adrs-spark"
                    className="hover:text-[#B2CD9C] text-[#bbbbbb] hover:pl-1 transition-all duration-200"
                  >
                    Why ADRS SPARK?
                  </a>
                </li>
                <li>
                  <a
                    href="/spark/allcourses"
                    className="hover:text-[#B2CD9C] text-[#bbbbbb] hover:pl-1 transition-all duration-200"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/spark/registration"
                    className="hover:text-[#B2CD9C] text-[#bbbbbb] hover:pl-1 transition-all duration-200"
                  >
                    Join Now
                  </a>
                </li>
                <li>
                  <a
                    href="/spark/blog"
                    className="hover:text-[#B2CD9C] text-[#bbbbbb] hover:pl-1 transition-all duration-200"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Programs */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 border-b border-[#B2CD9C] inline-block">
                Our Programs
              </h4>
              <ul className="space-y-3 mt-3">
                {[
                  "Web Development",
                  "Programming Languages",
                  "Mobile App Development",
                  "Database Courses",
                  "Software Testing",
                  "DevOps Courses",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="/spark/allcourses"
                      className="hover:text-[#B2CD9C] text-[#bbbbbb] hover:pl-1 transition-all duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-4 border-b border-[#B2CD9C] inline-block">
                Contact Us
              </h4>
              <ul className="space-y-4 mt-3 text-[14px]">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#B2CD9C] mr-2 mt-1" />
                  <span>
                    71, Dadda Nagar, Near Katangi Bypass, Jabalpur, <br />
                    Madhya Pradesh
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-[#B2CD9C] mr-2" />
                  <span>9201347033</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-[#B2CD9C] mr-2" />
                  <a
                    href="mailto:support@adrstechno.com"
                    className="hover:text-[#B2CD9C]"
                  >
                    support@adrstechno.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#050505]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-[#666666]">
            &copy; {new Date().getFullYear()} ADRS Spark. All rights reserved.
          </p>
          <div className="flex space-x-4">
            
            <a href="/privacy-policy" className="text-xs text-[#666666] hover:text-[#B2CD9C]">Privacy Policy</a>
            <a href="/terms" className="text-xs text-[#666666] hover:text-[#B2CD9C]">Terms Of Service</a>
            <a href="/cookies-policy" className="text-xs text-[#666666] hover:text-[#B2CD9C]">Cookies Policy</a>
             
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
