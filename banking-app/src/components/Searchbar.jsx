import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css'; // Assuming you have a CSS file for styling

const Searchbar = ({ suggestions }) => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);

  useEffect(() => {
    if (query) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query, suggestions]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = (suggestion) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      if (activeSuggestionIndex < filteredSuggestions.length - 1) {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    } else if (e.key === 'ArrowUp') {
      if (activeSuggestionIndex > 0) {
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
    } else if (e.key === 'Enter') {
      if (showSuggestions) {
        setQuery(filteredSuggestions[activeSuggestionIndex]);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
      }
    }
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="search-input"
      />
      {showSuggestions && query && (
        <ul className="suggestions-list">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={suggestion}
              className={index === activeSuggestionIndex ? "suggestion-active" : ""}
              onClick={() => handleClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Searchbar.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Searchbar;
