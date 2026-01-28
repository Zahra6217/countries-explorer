import CountryCard from "./CountryCard";

export default function CountriesList({ countries }) {
    return (
        <div className="countries-list">
            {countries.map((country) => (
                <CountryCard key={country.cca3} country={country} />
            ))}
        </div>
    );
}