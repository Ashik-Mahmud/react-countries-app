import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DetailsCard } from "./DetailsCard";

export const Details = () => {
  const [country, setCountry] = useState([]);
  const params = useParams();
  let navigate = useNavigate();
  const displayDetails = async () => {
    if (params.capital !== "undefined") {
      const response = await fetch(
        `https://restcountries.com/v3.1/capital/${params.capital}`
      );
      const data = await response.json();
      setCountry(data);
    } else {
      navigate("/");
      return alert("No data found by this capital");
    }
  };

  displayDetails();

  return (
    <div className="container">
      {country.map((country) => (
        <DetailsCard key={country.name.common} data={country} />
      ))}
    </div>
  );
};
