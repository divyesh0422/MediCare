import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
  <div className="container mx-auto px-4">
    {/* Top Footer Content */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
      {/* About Section */}
      <div>
        <h3 className="text-2xl font-bold text-primary mb-4">MediCare</h3>
        <p className="text-gray-400 mb-6">
          Providing quality healthcare services with compassion and excellence.
        </p>
        <div className="flex space-x-5">
          {/* Social Icons */}
          <a href="#" className="text-gray-400 hover:text-white transition">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">...</svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">...</svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">...</svg>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
        <ul className="space-y-3 text-gray-400">
          <li><Link to="/" className="hover:text-white transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
          <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
          <li><Link to="/doctors" className="hover:text-white transition">Doctors</Link></li>
          <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-primary">Services</h3>
        <ul className="space-y-3 text-gray-400">
          <li><a href="#" className="hover:text-white transition">Cardiology</a></li>
          <li><a href="#" className="hover:text-white transition">Neurology</a></li>
          <li><a href="#" className="hover:text-white transition">Pediatrics</a></li>
          <li><a href="#" className="hover:text-white transition">Orthopedics</a></li>
          <li><a href="#" className="hover:text-white transition">Emergency Care</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-primary">Contact Info</h3>
        <ul className="space-y-4 text-gray-400">
          <li className="flex items-start gap-3">
            <MapPinIcon className="h-5 w-5 text-primary mt-1" />
            <span>123 Medical Drive, Health City, HC 12345</span>
          </li>
          <li className="flex items-center gap-3">
            <PhoneIcon className="h-5 w-5 text-primary" />
            <span>(123) 456-7890</span>
          </li>
          <li className="flex items-center gap-3">
            <EnvelopeIcon className="h-5 w-5 text-primary" />
            <span>info@medicare.example</span>
          </li>
          <li className="flex items-center gap-3">
            <ClockIcon className="h-5 w-5 text-primary" />
            <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
      <p>&copy; {currentYear} MediCare. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;