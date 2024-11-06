import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries";
import Search from "./components/Search";

function App() {
  const [countrys, setCountry] = useState(null);
  const [filterCountries, setFilterCountries] = useState(countrys);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://restcountries.com/v3.1/all";
  const loadingMessage = <p>Loading ...</p>;

  const fetchData = async (url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountry(data);
      setFilterCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handelRemoveCountry = (name) => {
    const filter = filterCountries.filter(
      (country) => country.name.common !== name
    );
    setFilterCountries(filter);
  };

  const handleSearch = (searchData) => {
    let values = searchData.toLowerCase();
    const newCountries =
      !isLoading &&
      countrys.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(values);
      });
    setFilterCountries(newCountries);
  };

  const countryData = isLoading ? (
    loadingMessage
  ) : error ? (
    error
  ) : (
    <Countries
      countrys={filterCountries}
      onRemoveCountry={handelRemoveCountry}
    />
  );

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <>
      <h1>Country App</h1>
      <Search onSearchCountry={handleSearch} />
      {/* <input type="text" name="name" id="name" placeholder="Search" /> */}
      {countryData}
    </>
  );
}

export default App;
