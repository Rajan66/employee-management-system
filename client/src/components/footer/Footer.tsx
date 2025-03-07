// src/components/ui/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Admin Name or System Name */}
        <div className="text-sm">
          <p>© {new Date().getFullYear()} Employee Management System</p>
        </div>

        {/* Middle Section: Links */}
        <div className="space-x-6">
          <a href="/about" className="text-sm hover:text-gray-300">
            About
          </a>
          <a href="/contact" className="text-sm hover:text-gray-300">
            Contact Us
          </a>
          <a href="/privacy-policy" className="text-sm hover:text-gray-300">
            Privacy Policy
          </a>
        </div>

        {/* Right Section: Admin Info or Support */}
        <div className="text-sm">
          <p>Admin Dashboard</p>
          <p className="text-xs">Support: support@example.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
