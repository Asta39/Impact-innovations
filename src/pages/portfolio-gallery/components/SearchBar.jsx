import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SearchBar = ({ searchQuery, onSearchChange, onSearchSubmit, suggestions = [] }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  const recentSearches = [
    "laser cutting steel",
    "custom signage",
    "metal fabrication",
    "welding services",
    "CNC machining"
  ];

  const popularTags = [
    "automotive parts",
    "architectural elements",
    "industrial equipment",
    "decorative panels",
    "structural components"
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current && 
        !inputRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
        setSelectedSuggestionIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    onSearchChange(value);
    setShowSuggestions(value.length > 0 || isFocused);
    setSelectedSuggestionIndex(-1);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    setShowSuggestions(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    // Delay hiding suggestions to allow for clicks
    setTimeout(() => {
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }, 200);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    const allSuggestions = [
      ...suggestions,
      ...(searchQuery.length === 0 ? recentSearches : []),
      ...(searchQuery.length === 0 ? popularTags : [])
    ];

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedSuggestionIndex(prev => 
          prev < allSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedSuggestionIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedSuggestionIndex >= 0) {
          handleSuggestionClick(allSuggestions[selectedSuggestionIndex]);
        } else {
          onSearchSubmit(searchQuery);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedSuggestionIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion);
    onSearchSubmit(suggestion);
    setShowSuggestions(false);
    setSelectedSuggestionIndex(-1);
    inputRef.current?.blur();
  };

  const handleClearSearch = () => {
    onSearchChange('');
    inputRef.current?.focus();
  };

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <div className={`relative flex items-center bg-white border rounded-lg transition-all duration-200 ${
        isFocused ? 'border-primary shadow-lg' : 'border-border hover:border-primary/50'
      }`}>
        <div className="pl-4 pr-2">
          <Icon name="Search" size={20} color="var(--color-muted-foreground)" />
        </div>
        
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          placeholder="Search projects by service, material, industry..."
          className="flex-1 py-3 px-2 text-foreground placeholder-muted-foreground bg-transparent border-none outline-none"
        />

        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="p-2 mr-2 hover:bg-muted rounded-lg transition-fast"
          >
            <Icon name="X" size={16} color="var(--color-muted-foreground)" />
          </button>
        )}

        <button
          onClick={() => onSearchSubmit(searchQuery)}
          className="px-4 py-2 mr-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-fast"
        >
          <Icon name="Search" size={16} color="white" />
        </button>
      </div>

      {/* Search Suggestions Dropdown */}
      {showSuggestions && (
        <div 
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
        >
          {/* Filtered Suggestions */}
          {searchQuery && filteredSuggestions.length > 0 && (
            <div className="p-2">
              <div className="text-xs font-medium text-muted-foreground px-3 py-2">
                Suggestions
              </div>
              {filteredSuggestions.map((suggestion, index) => (
                <button
                  key={`suggestion-${index}`}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-fast ${
                    selectedSuggestionIndex === index
                      ? 'bg-primary/10 text-primary' :'hover:bg-muted text-foreground'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon name="Search" size={14} color="currentColor" />
                    <span>{suggestion}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Recent Searches */}
          {!searchQuery && (
            <div className="p-2">
              <div className="text-xs font-medium text-muted-foreground px-3 py-2">
                Recent Searches
              </div>
              {recentSearches.map((search, index) => (
                <button
                  key={`recent-${index}`}
                  onClick={() => handleSuggestionClick(search)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-fast ${
                    selectedSuggestionIndex === index
                      ? 'bg-primary/10 text-primary' :'hover:bg-muted text-foreground'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={14} color="currentColor" />
                    <span>{search}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Popular Tags */}
          {!searchQuery && (
            <div className="p-2 border-t border-border">
              <div className="text-xs font-medium text-muted-foreground px-3 py-2">
                Popular Tags
              </div>
              {popularTags.map((tag, index) => (
                <button
                  key={`tag-${index}`}
                  onClick={() => handleSuggestionClick(tag)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-fast ${
                    selectedSuggestionIndex === recentSearches.length + index
                      ? 'bg-primary/10 text-primary' :'hover:bg-muted text-foreground'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon name="Hash" size={14} color="currentColor" />
                    <span>{tag}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* No Results */}
          {searchQuery && filteredSuggestions.length === 0 && (
            <div className="p-4 text-center text-muted-foreground">
              <Icon name="Search" size={24} color="currentColor" className="mx-auto mb-2" />
              <p className="text-sm">No suggestions found for "{searchQuery}"</p>
              <p className="text-xs mt-1">Try searching for services, materials, or industries</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;