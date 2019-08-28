import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        value={props.searchedTitle}
        onChange={props.handleFilterSearch}
      />
    </div>
  );
}

export default Search;
