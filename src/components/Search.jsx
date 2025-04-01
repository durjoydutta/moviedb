import React from "react";

const Search = ({ searchTerm, setSearchTerm, movieCount }) => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        id="search"
        className="w-full max-w-lg bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        placeholder={`Search ${movieCount}+ Movies...`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
