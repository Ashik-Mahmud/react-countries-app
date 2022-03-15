import React from "react";
import styled from "styled-components";
import { CountryCard } from "./CountryCard";
export const CountriesBody = () => {
  const Country = styled.section`
    width: min(100% - 2rem, 1170px);
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
  `;
  return (
    <>
      <Country>
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </Country>
    </>
  );
};
