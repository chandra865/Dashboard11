// Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md flex flex-col justify-between">
      {/* Logo Section */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-white text-lg font-bold">J</span>
          </div>
          <h1 className="text-lg font-bold text-blue-700">Jur</h1>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="p-6 flex-grow">
        <ul className="space-y-6">
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <span className="w-6 h-6 mr-4">
              <i className="fas fa-tachometer-alt"></i>
            </span>
            Dashboard
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <span className="w-6 h-6 mr-4">
              <i className="fas fa-briefcase"></i>
            </span>
            My Cases
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <span className="w-6 h-6 mr-4">
              <i className="fas fa-chart-line"></i>
            </span>
            Activities
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <span className="w-6 h-6 mr-4">
              <i className="fas fa-calendar"></i>
            </span>
            Calendar
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <span className="w-6 h-6 mr-4">
              <i className="fas fa-folder"></i>
            </span>
            Files
          </li>
          <li className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <span className="w-6 h-6 mr-4">
              <i className="fas fa-gavel"></i>
            </span>
            Open a Dispute
          </li>
        </ul>
      </nav>

      {/* Promo Section */}
      <div className="p-6 bg-blue-50">
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <img
            src="/img.jpg"
            alt="Justice"
            className="mx-auto mb-4"
          />
          <p className="text-blue-700 font-medium">Get Justice on every Claim</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
