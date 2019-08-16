import React from 'react';

const Search = ({setQuery, query}) => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        onChange={setQuery}
        value={query}
      />
    </div>
  );
}

export default Search;
