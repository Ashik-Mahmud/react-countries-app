import React from "react";
import styled from "styled-components";
export const Header = () => {
  return (
    <>
      <Container>
        <div className="logo">Logo</div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Details</a>
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
  margin-bottom: 1rem;
`;
