import React from "react";

const Search = ({ searchTerm, setSearchTerm, movieCount}) => {
  return (
    <>
      <input
        type="text"
        id="search"
        className="bg-amber-100"
        placeholder={`Search ${movieCount}+ Movies...`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  );
};

export default Search;
