export default function CountryCard({ country }) {
    return (
        <div className="country-card">
            <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                className="country-flag"
            /> 
            <h3>{country.name.common}</h3>
            <p>Region: {country.region}</p>
            <p>Population: {country.population.toLocaleString()}</p>
        </div>
    );
}