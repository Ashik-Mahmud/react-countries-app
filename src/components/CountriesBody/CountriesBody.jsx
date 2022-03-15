import React from "react";
import styled from "styled-components";
import { CountryCard } from "./CountryCard";
export const CountriesBody = ({ countries }) => {
  return (
    <>
      <Country>
        {countries.status === 404 ? (
          <Heading>Data Not Found.</Heading>
        ) : (
          countries.map(({ name, flags, region, capital }) => (
            <CountryCard
              key={name}
              name={name}
              region={region}
              flag={flags.png}
              capital={capital}
            />
          ))
        )}
      </Country>
    </>
  );
};
const Heading = styled.h1`
  color: #f00;
  margin: 3rem 0rem;
`;
const Country = styled.section`
  width: min(100% - 2rem, 1170px);
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
