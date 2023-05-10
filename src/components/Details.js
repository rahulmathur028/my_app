import React from "react";

const Details = ({ name, email, index }) => {
  return (
    <div className="entry">
      <h5>{name}</h5>
      <h5>{email}</h5>
      <h5>Remove</h5>
    </div>
  );
};

export default Details;
