import React from "react";

const Search = ({ setQuery, query }) => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        value={query}
        placeholder="Search Notes"
        onChange={setQuery}
      />
    </div>
  );
};

export default Search;
