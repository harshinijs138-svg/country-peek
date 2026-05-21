function SearchBar({ query, onQueryChange }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search countries..."
        value={query}
        onChange={(e) =>
          onQueryChange(e.target.value)
        }
      />
    </div>
  );
}

export default SearchBar;