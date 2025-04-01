import React from "react";

const Pagination = ({ page, setPage }) => {
  const totalPages = 10; // Example: Adjust this based on your API's total pages
  const visiblePages = 5; // Number of visible page buttons

  const getPageNumbers = () => {
    const start = Math.max(1, page - Math.floor(visiblePages / 2));
    const end = Math.min(totalPages, start + visiblePages - 1);
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      {/* Previous Button */}
      <button
        className={`px-4 py-2 rounded-lg ${
          page === 1
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-red-500 text-white hover:bg-red-600"
        }`}
        onClick={() => page > 1 && setPage(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((pageNumber) => (
        <button
          key={pageNumber}
          className={`px-4 py-2 rounded-lg ${
            pageNumber === page
              ? "bg-red-500 text-white font-bold"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
          onClick={() => setPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`px-4 py-2 rounded-lg ${
          page === totalPages
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-red-500 text-white hover:bg-red-600"
        }`}
        onClick={() => page < totalPages && setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
