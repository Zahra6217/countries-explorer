export default function SearchBar({ search, onSearchChange }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search for a country..."
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
} 