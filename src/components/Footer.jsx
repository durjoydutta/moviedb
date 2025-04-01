import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} <span className="text-red-500">MovieDB</span>. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Powered by <a href="https://www.themoviedb.org/" className="text-blue-400 hover:underline">The Movie Database (TMDb)</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;