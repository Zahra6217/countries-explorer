export default function RegionFilter({ region, onRegionChange }) {
    return (
        <select
            className="region-select"
            value={region}
            onChange={(e) => onRegionChange(e.target.value)}
        >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    );
} 