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
  
  // const TikTokIcon = (
  //   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
  //     <path d="M12.75 2h2.25a.75.75 0 0 1 .75.75v2.25a3.75 3.75 0 0 0 3.75 3.75h.75A.75.75 0 0 1 21 9.5v2.25a.75.75 0 0 1-.75.75h-1.5v4.25A5.25 5.25 0 0 1 13.5 22h-1.5A5.25 5.25 0 0 1 6.75 16.25v-2.5A5.25 5.25 0 0 1 12 8.5h.75V2Zm-1.5 8.5A3.75 3.75 0 0 0 7.5 14.75v2.5A3.75 3.75 0 0 0 11.25 21h1.5A3.75 3.75 0 0 0 16.5 17.25v-4.25h-2.25a.75.75 0 0 1-.75-.75V9.5H12a.75.75 0 0 0-.75.75v.25Z" />
  //   </svg>
  // );
  // const WhatsappIcon = (
  //   <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
  //     <path d="M12 2a10 10 0 0 0-8.94 14.47l-1.05 3.06a1 1 0 0 0 1.26 1.26l3.06-1.05A10 10 0 1 0 12 2Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm4.29-5.71c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.44.1-.13.2-.5.65-.61.78-.11.13-.22.15-.42.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.11-.2-.01-.3.09-.4.09-.09.2-.22.3-.33.1-.11.13-.2.2-.33.07-.13.03-.25-.01-.35-.05-.1-.44-1.06-.6-1.45-.16-.39-.32-.34-.44-.35-.11-.01-.25-.01-.39-.01-.13 0-.34.05-.52.25-.18.2-.7.68-.7 1.66 0 .98.72 1.93.82 2.07.1.13 1.41 2.16 3.42 2.95.48.17.85.27 1.14.34.48.12.92.1 1.27.06.39-.05 1.18-.48 1.35-.94.17-.46.17-.85.12-.94-.05-.09-.18-.13-.38-.23Z" />
  //   </svg>
  // );

  const social = [
    { icon: <Twitter className="h-5 w-5" />, path: 'https://x.com/vortexxhub', label: 'Twitter' },
    { icon: <FaTiktok className="h-5 w-5" />, path: 'https://www.tiktok.com/@vortexx064?_t=ZM-8w3SCsO7bao&_r=1', label: 'TikTok' },
    { icon: <Instagram className="h-5 w-5" />, path: 'www.instagram.com/vortexx831 ', label: 'Instagram' },
    { icon: <FaWhatsapp className="h-5 w-5" />, path: 'https://whatsapp.com/channel/0029VbAml8WFXUuWcJhSNb3J', label: 'WhatsApp' },
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