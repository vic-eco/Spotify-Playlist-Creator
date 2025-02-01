import React from 'react';

function SearchBar({value, setValue, searchType, onSubmit}){

    return(
        <form onSubmit={onSubmit}>
            <input type='text' value={value} placeholder={`Search by ${searchType}`} onChange = {(e)=>setValue(e.target.value)}></input>
            <button type='submit'>Search!</button>
        </form>
    )
}

export default SearchBar;