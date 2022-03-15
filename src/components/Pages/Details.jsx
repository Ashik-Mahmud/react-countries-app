import React from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="container">
      <h1>Details countries here</h1>
    </div>
  );
};
