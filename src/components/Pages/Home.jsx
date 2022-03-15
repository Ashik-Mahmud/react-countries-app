import React from "react";
import { CountriesBody } from "../CountriesBody/CountriesBody";
import { SearchBar } from "../SearchBar/SearchBar";
export const Home = () => {
  return (
    <>
      <SearchBar />
      <CountriesBody />
    </>
  );
};
