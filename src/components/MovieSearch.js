import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieSearch() {
    const [query, setQuery] = useState('')
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/search/movie?query=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for movie"
      />
      <button type="submit">Search</button>
    </form>
  );
}
