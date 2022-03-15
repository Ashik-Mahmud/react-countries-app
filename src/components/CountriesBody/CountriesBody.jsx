import React from "react";
import styled from "styled-components";
import { CountryCard } from "./CountryCard";
export const CountriesBody = ({ countries }) => {
  return (
    <>
      <Country>
        {countries.map(({ name, flags, region }) => (
          <CountryCard
            key={name}
            name={name}
            region={region}
            flag={flags.png}
          />
        ))}
      </Country>
    </>
  );
};
const Country = styled.section`
  width: min(100% - 2rem, 1170px);
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
