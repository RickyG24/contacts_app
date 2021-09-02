import React, { useState, useEffect } from 'react';
import './App.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form method="get" autoComplete="off" onSubmit={onSubmit}>
            <input value={searchQuery} 
            onInput={(e) => setSearchQuery(e.target.value)} type="text"
                name="s" placeholder="Search-contact-list"/>
        </form>
    );
};

export default SearchBar;