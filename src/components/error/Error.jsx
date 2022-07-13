import React from "react";

export const Error = (error) => {
  console.log(error);
  return (
    <div className="error">
      <div className="container">
        <h1>Oooops, something happened</h1>
        <h5>Try to repeat later</h5>
        <p>{error.error}</p>
      </div>
    </div>
  );
};
