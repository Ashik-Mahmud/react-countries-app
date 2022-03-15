import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
export const DetailsCard = ({ data }) => {
  const { common, official } = data.name;
  const { region, capital, population, languages, timezones, area, flags } =
    data;
  const languagesText = Object.values(languages).join(", ");
  let backNavigate = useNavigate();

  return (
    <>
      <Details className="details">
        <div className="header">
          <h1 className="heading">
            <Button onClick={() => backNavigate("/")}>Back</Button>
            {official}
          </h1>
          <img width={"50"} src={data.coatOfArms.png} alt={official} />
        </div>
        <img src={flags.png} style={imageStyled} alt={common} />
        <h1 style={{ textAlign: "center" }}>{common}</h1>
        <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>{capital}</h4>
        <List>
          <li>
            Country: <b>{common}</b>
          </li>
          <li>
            Region: <b>{region}</b>
          </li>
          <li>
            Area: <b>{area}</b>
          </li>
          <li>
            TimeZone: <b>{timezones[0]}</b>
          </li>
          <li>
            Capital: <b>{capital}</b>
          </li>
          <li>
            Population: <b>{population}</b>
          </li>
          <li>
            Languages: <b>{languagesText}</b>
          </li>
        </List>
      </Details>
    </>
  );
};
const Details = styled.div`
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f8f8f8;
    padding: 1rem;
  }
  .heading {
    display: flex;
    align-items: center;
  }
`;
const List = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem 2rem;
  justify-content: center;
`;
const imageStyled = {
  width: "100%",
  height: "300px",
  objectFit: "contain",
  margin: "3rem 0rem",
};
const Button = styled.button`
  padding: 1rem 1rem;
  position: relative;
  margin-right: 1rem;
  background: #0072d2;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
`;
