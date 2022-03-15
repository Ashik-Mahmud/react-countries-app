import React, { useEffect, useState } from "react";
import { CountriesBody } from "../CountriesBody/CountriesBody";
import { Header } from "../Header/Header";
import { SearchBar } from "../SearchBar/SearchBar";
export const Home = () => {
  const [countries, setCountries] = useState([]);
  const loadCountries = async () => {
    const response = await fetch(`https://restcountries.com/v2/all`);
    const data = await response.json();
    setCountries(data.slice(0, 50));
  };

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <>
      <Header />
      <SearchBar setCountries={setCountries} />
      <CountriesBody countries={countries} />
    </>
  );
};
