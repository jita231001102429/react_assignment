function SearchBar({ city, setCity, onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-wrapper">

        <span className="search-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20L16.65 16.65" />
          </svg>
        </span>

        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="Search for a city..."
          aria-label="Search for a city"
        />

      </div>

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;