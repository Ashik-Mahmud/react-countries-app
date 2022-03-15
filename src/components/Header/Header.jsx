import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const Header = () => {
  return (
    <>
      <Container>
        <div className="logo">Logo</div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </Container>
    </>
  );
};
const Container = styled.div`
  max-width: min(100% - 2rem, 1170px);
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 1rem;
  }
`;
