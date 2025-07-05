import { 
  FaInstagram, 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 

} from 'react-icons/fa';
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h5>
              <h3 className="text-white text-2xl font-bold mb-4">ADRS Technosoft</h3><br />Advanced Digital & Reliable Solutions
            </h5>
            <p className="text-white mb-4 leading-relaxed text-[14px]">
              Innovating the future with cutting-edge technology solutions for your business.
            </p>
             <div className="flex space-x-4">
              <a href="https://www.instagram.com/adrstechno?igsh=MWhjOGdvdXpzOXBwYg==" className="text-blue-800 hover:text-white transition" aria-label="Instagram">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://github.com/adrstechno" className="text-blue-800 hover:text-white transition" aria-label="GitHub">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/adrs-technology/" className="text-blue-800 hover:text-white transition" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/adrstechno?igsh=MWhjOGdvdXpzOXBwYg==" className="text-blue-800 hover:text-white transition" aria-label="Facebook">
                <FaFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 inline-block text-white border-b border-[#fff]">Quick Links</h4>
            <ul className="space-y-3 mt-3 text-gray-400">
              <li><a href="/" className="hover:text-[#B2CD9C] text-[#fff] hover:pl-1 transition-all duration-200">Home</a></li>
              <li><a href="/services" className="hover:text-[#B2CD9C] text-[#fff] hover:pl-1 transition-all duration-200">Services</a></li>
              <li><a href="/product" className="hover:text-[#B2CD9C] text-[#fff] hover:pl-1 transition-all duration-200">Products</a></li>
              <li><a href="/career" className="hover:text-[#B2CD9C] text-[#fff] hover:pl-1 transition-all duration-200">Career</a></li>
              <li><a href="/contact" className="hover:text-[#B2CD9C] text-[#fff] hover:pl-1 transition-all duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 inline-block border-b border-[#fff]">Services</h4>
            <ul className="space-y-3 mt-3 text-gray-400">
              <li><a href="/services" className="hover:text-[#B2CD9C] text-[#fff] hover:pl-1 transition-all duration-200">Web Development</a></li>
              <li><a href="/services" className="hover:text-[#B2CD9C] text-[#fff] hover:pl-1 transition-all duration-200">Mobile App Development</a></li>
              <li><a href="/services" className="hover:text-[#B2CD9C] text-[#fff] hover:pl-1 transition-all duration-200">Software Development</a></li>
              <li><a href="/services" className="hover:text-[#B2CD9C] text-[#fff] hover:pl-1 transition-all duration-200">Digital Marketing</a></li>
              <li><a href="/services" className="hover:text-[#B2CD9C] text-[#fff] hover:pl-1 transition-all duration-200">Graphic Designing</a></li>
              
             
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
                        <h4 className="text-lg font-semibold text-white mb-4 border-b border-[#fff] inline-block">
                          Contact Us
                        </h4>
                        <ul className="space-y-4 mt-3 text-[14px]">
                          <li className="flex items-start">
                            <MapPin className="h-5 w-5 mr-2 mt-1 hover:text-[#B2CD9C]" />
                            <span>
                              71, Dadda Nagar, Near Katangi Bypass, Jabalpur, <br />
                              Madhya Pradesh
                            </span>
                          </li>
                          <li className="flex items-center">
                            <Phone className="h-5 w-5 mr-2 hover:text-[#B2CD9C]" />
                            <span className="hover:text-[#B2CD9C]">9201347033</span>
                          </li>
                          <li className="flex items-center">
                            <Mail className="h-5 w-5 mr-2 hover:text-[#B2CD9C]" />
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

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ADRS PVT LTD. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</a>

            <a href="/terms" className="text-sm hover:underline">Terms of Service</a>

            <a href="/cookies-policy" className="text-sm hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;