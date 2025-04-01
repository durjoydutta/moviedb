import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <img
            src="/assets/logo.svg" // Replace with your logo path
            alt="Logo"
            className="w-10 h-10"
          />
          <h1 className="text-2xl font-bold">
            <span className="text-red-500">Movie</span>DB
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;