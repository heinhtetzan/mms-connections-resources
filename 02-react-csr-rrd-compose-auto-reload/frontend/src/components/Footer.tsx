import { Link } from 'react-router-dom';
import { Network, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Network className="w-8 h-8 text-sky-500" />
              <span className="text-xl font-bold text-white">MMS Connections</span>
            </div>
            <p className="text-sm mb-4">
              Empowering businesses with innovative software solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-sky-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-sky-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-sky-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-sky-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-500 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-sky-500 transition-colors">Products</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-sky-500 transition-colors cursor-pointer">Custom Development</li>
              <li className="hover:text-sky-500 transition-colors cursor-pointer">Cloud Solutions</li>
              <li className="hover:text-sky-500 transition-colors cursor-pointer">Mobile Apps</li>
              <li className="hover:text-sky-500 transition-colors cursor-pointer">Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-sky-500" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-sky-500" />
                <span className="text-sm">info@mmsconnections.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MMS Connections. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
