import React from "react";
import styled from "styled-components";
export const CountryCard = () => {
  const Card = styled.div`
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    cursor: pointer;

    img {
      max-width: 100%;
      height: auto;
    }
  `;
  return (
    <Card>
      <div className="flags">
        <img src="https://flagcdn.com/w320/uy.png" alt="flags" />
      </div>
      <div className="details">
        <h4>Bangladesh</h4>
        <span>Asia</span>
      </div>
    </Card>
  );
};
