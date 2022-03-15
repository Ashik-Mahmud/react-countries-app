import React from "react";
import styled from "styled-components";
export const SearchBar = () => {
  const SearchArea = styled.div`
    width: min(100% - 2rem, 600px);
    margin: 2rem auto;
    text-align: center;
    span {
      font-size: 3rem;
    }
    h1 {
      margin: 0rem 0rem 1rem 0rem;
      color: #0072d2;
    }
    .input-group {
      display: flex;
      align-items: center;
      background: #f8f8f8;
      padding: 0.5rem;
      border-radius: 80px;
    }
    input {
      width: 100%;
      padding: 0.6rem 1rem;
      font-family: poppins;
      background: transparent;
      border: none;
      outline: none;
      font-size: 1rem;
    }
    button {
      padding: 0.6rem 2rem;
      font-family: poppins;
      background: #0072d2;
      color: #fff;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 1rem;
      border-radius: 80px;
    }
  `;
  return (
    <>
      <SearchArea>
        <span>🌎</span>
        <h1>Search Countries</h1>
        <div className="input-group">
          <input
            type="search"
            placeholder="Search Country"
            name="search-countries"
            id="search-countries"
          />
          <button>Search</button>
        </div>
      </SearchArea>
    </>
  );
};
