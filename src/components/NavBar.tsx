
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <span className="text-arch-navy font-playfair font-bold text-2xl">ArchFic</span>
            <span className="text-arch-gold font-playfair font-medium text-2xl">Investment</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium text-base underline-grow ${
                    isActive ? 'text-arch-gold' : 'text-arch-navy hover:text-arch-gold'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="bg-arch-navy text-white px-6 py-2 rounded hover:bg-arch-gold transition-colors duration-300"
            >
              Get a Quote
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-arch-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white shadow-lg py-4 px-6 absolute w-full top-full left-0 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium text-base py-2 ${
                    isActive ? 'text-arch-gold' : 'text-arch-navy hover:text-arch-gold'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="bg-arch-navy text-white px-6 py-2 rounded hover:bg-arch-gold transition-colors duration-300 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
