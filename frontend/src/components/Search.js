import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input onChange={props.filterNotesHandler}
        id="search-bar"
        type="text"
        placeholder="Search Notes"
      />
    </div>
  );
}

export default Search;
