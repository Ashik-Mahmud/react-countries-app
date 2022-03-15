import React from "react";
import { useParams } from "react-router-dom";

export const About = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="container">
      <h1>About Page here</h1>
    </div>
  );
};
