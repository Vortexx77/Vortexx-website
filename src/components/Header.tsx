import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const location = useLocation();
    const isHome = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  //helper function for the navlinks
    const getNavLinkClass = (isActive: boolean) => {
    if (!isHome) {
      // All other pages: always black text on white background
      return `relative px-4 py-2 text-2xl font-bold tracking-wider transition-all duration-300 ease-out
        ${isActive ? 'text-primary-600' : 'text-gray-900 hover:text-primary-600'}
        group`;
    }
    // Home page logic
    return `relative px-4 py-2 text-2xl font-bold tracking-wider transition-all duration-300 ease-out
      ${
        isScrolled
          ? isActive
            ? 'text-primary-600'
            : 'text-gray-900 hover:text-primary-600'
          : isActive
            ? 'text-primary-300'
            : 'text-white hover:text-primary-300'
      }
      group`;
  };

  return (
    <header 
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300  
        ${
          isHome? isScrolled ? 'backdrop-blur-md bg-white/60 shadow-lg border-b border-white/30 ring-1 ring-fuchsia-300/20' 
        : 'bg-transparent border-b border-transparent'
        : 'backdrop-blur-md bg-white/80 shadow-lg border-b border-white/30'
      }
    `}
    >
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Cpu className="h-8 w-8 text-primary-600" />
            <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-primary-400 via-fuchsia-500 to-primary-600 bg-clip-text text-transparent animate-gradient">VORTEX</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                  to={link.path}
                  className={({ isActive }) => getNavLinkClass(isActive)}
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span
                        className={`absolute left-0 -bottom-1 h-1 w-full rounded bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300
                          ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'}
                        `}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="btn px-6 py-2 rounded-full bg-gradient-to-r from-primary-500 via-fuchsia-500 to-primary-700 text-white font-bold shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
            >
              Get In Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded focus:outline-none transition-colors duration-300"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              // X (close) icon
              <X
                className={`w-8 h-8 transition-colors duration-300
                  ${
                    isHome
                      ? isScrolled
                        ? 'text-gray-900'
                        : 'text-white'
                      : 'text-gray-900'
                  }
                `}
              />
            ) : (
              // Hamburger icon
              <Menu
                className={`w-8 h-8 transition-colors duration-300
                  ${
                    isHome
                      ? isScrolled
                        ? 'text-gray-900'
                        : 'text-white'
                      : 'text-gray-900'
                  }
                `}
              />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed  left-1/2 -translate-x-1/2 z-50 w-80 max-w-xs  shadow-2xl backdrop-blur-md bg-white/90 py-2 flex flex-col items-center space-y-6 md:hidden transition-all duration-300">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-xl font-semibold tracking-wide transition-all duration-200
                ${isActive ? 'text-primary-600' : 'text-gray-900 hover:text-primary-600'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;