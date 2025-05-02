import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingCTA: React.FC = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-24 right-8 z-50 flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-3 text-white shadow-lg transition-all duration-300 hover:bg-primary-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      aria-label="Contact us"
    >
      <MessageSquare className="h-5 w-5" />
      <span className="font-medium">Let's Talk</span>
    </Link>
  );
};

export default FloatingCTA;