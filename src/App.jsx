import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import CountriesList from "./components/CountriesList";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCountries() {
      setLoading(true);
      setError(null);

      try {
        let url = "https://restcountries.com/v3.1/all";

        if (search) {
          url = `https://restcountries.com/v3.1/name/${search}`;
        } else if (region !== "all") {
          url = `https://restcountries.com/v3.1/region/${region}`;
        }

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data = await res.json();
        setCountries(data);
      } catch (err) {
        setError(err.message);
        setCountries([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, [search, region]);

  return (
    <div>
      <h1>Countries Explorer</h1>

      <SearchBar search={search} onSearchChange={setSearch} />
      <RegionFilter region={region} onRegionChange={setRegion} />

      {loading && <p>Loading...</p>}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && <CountriesList countries={countries} />}
    </div>
  );
}

export default App;