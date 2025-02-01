import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

function SearchBarContainer() {
    const [search, setSearch] = useState('');
    const [searchType, setSearchType] = useState('title');
  
    function handleOnSubmit(e){
      e.preventDefault();
      alert(`You searched ${search}`);
      setSearch('');
    }

  return (
  <SearchBar value={search} setValue={setSearch} searchType={searchType} onSubmit={handleOnSubmit}/>
  )
}

export default SearchBarContainer;