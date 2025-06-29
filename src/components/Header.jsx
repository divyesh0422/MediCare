import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      subLinks: [
        { name: 'Primary Care', path: '/services/primary-care' },
        { name: 'Specialty Care', path: '/services/specialty-care' },
        { name: 'Diagnostics', path: '/services/diagnostics' },
        { name: 'Emergency Care', path: '/services/emergency' },
      ]
    },
    { name: 'Doctors', path: '/doctors' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-primary p-2 rounded-lg mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold text-dark">
              Medi<span className="text-primary">Care</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`flex items-center py-2 px-1 font-medium transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-dark hover:text-primary'}`}
                >
                  {link.name}
                  {link.subLinks && (
                    <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-400 group-hover:text-primary transition" />
                  )}
                </Link>
                
                {link.subLinks && (
                  <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-1">
                    <div className="py-1">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className={`block px-4 py-2 text-sm ${location.pathname === subLink.path ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-100'}`}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center text-dark hover:text-primary transition"
            >
              <PhoneIcon className="h-5 w-5 mr-1" />
              <span className="font-medium">(123) 456-7890</span>
            </a>
            <Link
              to="/appointment"
              className="bg-primary text-white px-6 py-2 rounded-md font-medium hover:bg-secondary transition flex items-center"
            >
              <UserIcon className="h-5 w-5 mr-2" />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-dark hover:text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}
        >
          <div className="pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 last:border-0">
                <Link
                  to={link.path}
                  className={`block py-3 px-2 font-medium ${location.pathname === link.path ? 'text-primary' : 'text-dark hover:text-primary'}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="pl-4 py-2 space-y-2">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.path}
                        className={`block py-2 text-sm ${location.pathname === subLink.path ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
                        onClick={closeMenu}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center w-full bg-gray-100 text-dark hover:text-primary px-4 py-3 rounded-md font-medium"
              >
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call Now: (123) 456-7890
              </a>
              <Link
                to="/appointment"
                className="block w-full bg-primary text-white text-center px-4 py-3 rounded-md font-medium hover:bg-secondary transition"
                onClick={closeMenu}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;