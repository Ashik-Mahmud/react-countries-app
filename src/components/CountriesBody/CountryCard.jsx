import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const CountryCard = ({ name, flag, region, slug }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${slug}`);
  };
  return (
    <>
      <Card to={"/details/" + slug}>
        <div className="flags">
          <img src={flag} alt="flags" />
        </div>
        <div className="details">
          <h4>{name}</h4>
          <span>{region}</span>
        </div>
      </Card>
    </>
  );
};
const Card = styled(NavLink)`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  cursor: pointer;
  color: #333;
  img {
    max-width: 100%;
    height: auto;
  }
`;
