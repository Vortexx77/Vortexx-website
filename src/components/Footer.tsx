import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu,  Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'Web Design', path: '/services#web-design' },
    { name: 'Systems Development', path: '/services#systems-development' },
    { name: 'Graphics Design', path: '/services#graphics-design' },
    { name: 'Digital Marketing', path: '/services#digital-marketing' },
    { name: 'Infrastructure Management', path: '/services#infrastructure' },
    { name: 'AI agents', path: '/services#infrastructure' },
  ];
  
  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about#team' },
    { name: 'Careers', path: '/about#careers' },
    { name: 'Contact Us', path: '/contact' },
  ];
  

  const social = [
    { icon: <Twitter className="h-5 w-5" />, path: 'https://x.com/vortexxhub', label: 'Twitter' },
    { icon: <FaTiktok className="h-5 w-5" />, path: 'https://www.tiktok.com/@vortexx064?_t=ZM-8w3SCsO7bao&_r=1', label: 'TikTok' },
    { icon: <Instagram className="h-5 w-5" />, path: 'www.instagram.com/vortexx831 ', label: 'Instagram' },
    { icon: <FaWhatsapp className="h-5 w-5" />, path: 'https://wa.me/qr/ASTQXXADTKFNL1', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container">
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Cpu className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold text-white">VORTEXX</span>
            </Link>
            <p className="mt-4 max-w-xs text-gray-400">
              Transforming businesses through innovative technology solutions and exceptional digital experiences.
            </p>
            <div className="mt-6 flex space-x-4">
              {social.map((item, index) => (
                <a 
                  key={index}
                  href={item.path}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-primary-600 hover:text-white"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path}
                    className="transition-colors hover:text-primary-500"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className="transition-colors hover:text-primary-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-primary-500" />
                <span>Bukasa-Bugiri, Kawuku</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary-500" />
                <span>(+256) 745-231430 </span>
                <span>/ 790-956548</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary-500" />
                <a href="mailto:info@vortextech.com" className="hover:text-primary-500">
                  thevortexxinfo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6">
          <div className=" flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p>&copy; {currentYear} VORTEXX Technologies. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm hover:text-primary-500">Privacy Policy</Link>
              <Link to="/terms" className="text-sm hover:text-primary-500">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;